
import React, { useState, useEffect, useRef } from 'react';
import { LogOut, Users, Save, CheckCircle, FileUp, AlertTriangle, FileSpreadsheet, Info, Search, Edit2, Trash2, Plus, X } from 'lucide-react';
import { Member } from '../types';
import { getMembers, saveMembers } from '../services/dataService';
import * as XLSX from 'https://esm.sh/xlsx@0.18.5';

interface AdminDashboardProps {
  onLogout: () => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ onLogout }) => {
  const [members, setMembers] = useState<Member[]>([]);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const [showSaveMessage, setShowSaveMessage] = useState(false);
  const [lastImportCount, setLastImportCount] = useState<number | null>(null);
  
  // States for manual editing
  const [searchTerm, setSearchTerm] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [currentMember, setCurrentMember] = useState<Partial<Member>>({});
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setMembers(getMembers());
  }, []);

  const handleSave = () => {
    saveMembers(members);
    setHasUnsavedChanges(false);
    setShowSaveMessage(true);
    setLastImportCount(null);
    setTimeout(() => setShowSaveMessage(false), 3000);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const data = new Uint8Array(event.target?.result as ArrayBuffer);
        const workbook = XLSX.read(data, { type: 'array', cellDates: true });
        const firstSheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[firstSheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet) as any[];

        const importedMembers: Member[] = jsonData.map((row, index) => {
          const cognome = row.Cognome || row.surname || row.COGNOME || "";
          const nome = row.Nome || row.name || row.NOME || "";
          const birthDateRaw = row['Data di nascita'] || row.birthday || row.birthDate || row.DATA_NASCITA || row.Nascita || row.DATA_DI_NASCITA;
          
          let birthDate = "";
          if (birthDateRaw instanceof Date) {
            birthDate = birthDateRaw.toISOString().split('T')[0];
          } else if (typeof birthDateRaw === 'string') {
            birthDate = birthDateRaw;
          }

          return {
            id: `m-import-${Date.now()}-${index}`,
            name: `${cognome} ${nome}`.trim(),
            birthDate: birthDate
          };
        }).filter(m => m.name.length > 0);

        if (importedMembers.length > 0) {
          const choice = window.confirm(
            `Trovati ${importedMembers.length} soci nel file.\n\n` +
            `Vuoi SOSTITUIRE l'intero elenco attuale con questo file?\n` +
            `(OK = Sostituisci tutto, ANNULLA = Aggiungi ai soci esistenti)`
          );

          if (choice) {
            setMembers(importedMembers);
            setLastImportCount(importedMembers.length);
          } else {
            setMembers(prev => [...importedMembers, ...prev]);
            setLastImportCount(importedMembers.length);
          }
          setHasUnsavedChanges(true);
        } else {
          alert("Nessun dato valido trovato nel file. Assicurati che le colonne si chiamino 'Cognome', 'Nome' e 'Data di nascita'.");
        }
      } catch (error) {
        console.error("Errore lettura Excel:", error);
        alert("Errore durante la lettura del file. Riprova con un formato valido.");
      }
      if (fileInputRef.current) fileInputRef.current.value = '';
    };
    reader.readAsArrayBuffer(file);
  };

  // Manual Member Management Functions
  const filteredMembers = members.filter(m => 
    m.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const openEditModal = (member: Member) => {
    setCurrentMember({ ...member });
    setIsEditing(true);
  };

  const openAddModal = () => {
    setCurrentMember({ name: '', birthDate: '' });
    setIsAdding(true);
  };

  const handleDelete = (id: string) => {
    if (window.confirm("Sei sicuro di voler eliminare questo socio?")) {
      setMembers(prev => prev.filter(m => m.id !== id));
      setHasUnsavedChanges(true);
    }
  };

  const saveEdit = () => {
    if (!currentMember.name) return;
    setMembers(prev => prev.map(m => m.id === currentMember.id ? { ...m, name: currentMember.name!, birthDate: currentMember.birthDate } : m));
    setIsEditing(false);
    setHasUnsavedChanges(true);
  };

  const saveAdd = () => {
    if (!currentMember.name) return;
    const newMember: Member = {
      id: `m-manual-${Date.now()}`,
      name: currentMember.name!,
      birthDate: currentMember.birthDate
    };
    setMembers(prev => [newMember, ...prev]);
    setIsAdding(false);
    setHasUnsavedChanges(true);
  };

  return (
    <div className="min-h-screen bg-juve-gray text-black pt-24 pb-12">
      <div className="container mx-auto px-4 max-w-5xl">
        
        {/* Header Dashboard */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center gap-4">
            <div className="bg-black text-white p-3 rounded-lg shadow-md">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <h1 className="font-display font-black text-2xl uppercase tracking-tighter">Gestione Elenco Soci</h1>
              <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">Juventus Official Fan Club Enna</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
             <button 
                onClick={onLogout}
                className="flex items-center gap-2 text-gray-400 hover:text-black font-bold text-xs uppercase tracking-widest transition-colors"
             >
                <LogOut className="w-4 h-4" />
                Esci
             </button>
          </div>
        </div>

        {/* Global Save Button - Only visible if changes */}
        {hasUnsavedChanges && (
          <div className="sticky top-24 z-50 mb-8 p-4 bg-juve-gold/10 border border-juve-gold rounded-xl flex flex-col md:flex-row items-center justify-between gap-4 backdrop-blur-md">
            <div className="flex items-center gap-3">
               <AlertTriangle className="w-6 h-6 text-juve-gold animate-pulse" />
               <div>
                  <p className="font-bold text-black uppercase text-sm">Modifiche non salvate</p>
                  <p className="text-xs text-gray-600">Ricordati di salvare per pubblicare le modifiche sul sito.</p>
               </div>
            </div>
            <button 
              onClick={handleSave}
              className="bg-juve-gold text-white px-8 py-3 rounded-lg font-display font-bold uppercase tracking-[0.2em] flex items-center gap-2 hover:bg-black transition-all shadow-lg"
            >
              <Save className="w-5 h-5" />
              Salva Tutto
            </button>
          </div>
        )}

        {/* Notifica Salvataggio */}
        {showSaveMessage && (
          <div className="fixed top-24 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-2xl z-[100] flex items-center gap-2 animate-bounce">
            <CheckCircle className="w-5 h-5" />
            <span className="font-bold uppercase text-xs tracking-widest">Dati salvati con successo!</span>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Left Column: Manual Management */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 flex flex-col h-[600px]">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="font-display font-bold text-xl uppercase flex items-center gap-2">
                        <Edit2 className="w-5 h-5 text-juve-gold" />
                        Gestione Manuale
                    </h3>
                    <button onClick={openAddModal} className="bg-black text-white p-2 rounded-full hover:bg-juve-gold transition-colors">
                        <Plus className="w-5 h-5" />
                    </button>
                </div>

                {/* Search */}
                <div className="relative mb-4">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input 
                        type="text" 
                        placeholder="Cerca socio..." 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-juve-gold text-sm"
                    />
                </div>

                {/* List */}
                <div className="flex-1 overflow-y-auto pr-2 space-y-2">
                    {filteredMembers.map(member => (
                        <div key={member.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-100 hover:border-gray-300 transition-colors">
                            <div>
                                <p className="font-bold text-sm uppercase text-gray-800">{member.name}</p>
                                {member.birthDate && <p className="text-xs text-gray-500 font-mono">Nato il: {member.birthDate}</p>}
                            </div>
                            <div className="flex gap-2">
                                <button onClick={() => openEditModal(member)} className="text-gray-400 hover:text-black">
                                    <Edit2 className="w-4 h-4" />
                                </button>
                                <button onClick={() => handleDelete(member.id)} className="text-gray-400 hover:text-red-600">
                                    <Trash2 className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    ))}
                    {filteredMembers.length === 0 && (
                        <div className="text-center py-10 text-gray-400 text-sm">Nessun socio trovato</div>
                    )}
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-100 text-center text-xs text-gray-500 font-bold uppercase">
                    Totale Soci: {members.length}
                </div>
            </div>

            {/* Right Column: Import Excel */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 h-fit">
                <div className="text-center mb-8">
                    <div className="bg-juve-gray w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileSpreadsheet className="w-8 h-8 text-juve-gold" />
                    </div>
                    <h3 className="font-display font-bold text-xl uppercase mb-2">Importa da Excel</h3>
                    <p className="text-gray-500 text-sm">
                    Carica un file .xlsx o .csv per aggiornare massivamente la lista.
                    </p>
                </div>

                <div className="flex flex-col items-center gap-6 py-6 border-2 border-dashed border-gray-200 rounded-2xl bg-gray-50 hover:bg-gray-100/50 transition-colors">
                    <input 
                    type="file" 
                    ref={fileInputRef} 
                    onChange={handleFileUpload} 
                    accept=".xlsx, .xls, .csv" 
                    className="hidden" 
                    />
                    
                    <button 
                    onClick={() => fileInputRef.current?.click()}
                    className="bg-black text-white px-6 py-3 rounded-full font-display font-bold text-sm uppercase tracking-widest flex items-center gap-2 hover:bg-juve-gold transition-all"
                    >
                    <FileUp className="w-4 h-4" />
                    Seleziona File
                    </button>
                </div>

                <div className="mt-6 bg-gray-50 p-4 rounded-lg text-xs text-gray-600">
                     <p className="font-bold mb-1">Nota Colonne:</p>
                     Il file deve avere le colonne "Cognome", "Nome" e opzionalmente "Data di nascita".
                </div>
            </div>
        </div>
      </div>

      {/* Edit/Add Modal */}
      {(isEditing || isAdding) && (
        <div className="fixed inset-0 bg-black/80 z-[60] flex items-center justify-center p-4 backdrop-blur-sm">
            <div className="bg-white w-full max-w-md rounded-xl p-6 shadow-2xl animate-fade-in-up">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="font-display font-bold text-xl uppercase">
                        {isAdding ? 'Nuovo Socio' : 'Modifica Socio'}
                    </h3>
                    <button onClick={() => { setIsEditing(false); setIsAdding(false); }} className="text-gray-500 hover:text-black">
                        <X className="w-6 h-6" />
                    </button>
                </div>

                <div className="space-y-4">
                    <div>
                        <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Cognome e Nome</label>
                        <input 
                            type="text" 
                            value={currentMember.name || ''}
                            onChange={(e) => setCurrentMember({...currentMember, name: e.target.value})}
                            className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-juve-gold uppercase"
                            placeholder="COGNOME NOME"
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Data di Nascita</label>
                        <input 
                            type="date" 
                            value={currentMember.birthDate || ''}
                            onChange={(e) => setCurrentMember({...currentMember, birthDate: e.target.value})}
                            className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-juve-gold"
                        />
                        <p className="text-[10px] text-gray-400 mt-1">Serve per il banner compleanni (non visibile nella lista pubblica).</p>
                    </div>
                </div>

                <div className="mt-8 flex gap-3">
                    <button 
                        onClick={() => { setIsEditing(false); setIsAdding(false); }}
                        className="flex-1 py-3 font-bold uppercase text-sm text-gray-500 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                        Annulla
                    </button>
                    <button 
                        onClick={isAdding ? saveAdd : saveEdit}
                        className="flex-1 py-3 bg-juve-gold text-white font-bold uppercase text-sm rounded-lg hover:bg-black transition-colors"
                    >
                        {isAdding ? 'Aggiungi' : 'Salva Modifiche'}
                    </button>
                </div>
            </div>
        </div>
      )}

    </div>
  );
};

export default AdminDashboard;
