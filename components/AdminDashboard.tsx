
import React, { useState, useEffect } from 'react';
import { LogOut, Users, Search, Calendar, User } from 'lucide-react';
import { Member } from '../types';
import { getMembers } from '../services/dataService';

interface AdminDashboardProps {
  onLogout: () => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ onLogout }) => {
  const [members, setMembers] = useState<Member[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setMembers(getMembers());
  }, []);

  const filteredMembers = members.filter(m => 
    m.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Funzione helper per formattare la data in stile italiano (DD/MM/YYYY)
  const formatDate = (dateString?: string) => {
    if (!dateString) return "-";
    try {
        const [year, month, day] = dateString.split('-');
        return `${day}/${month}/${year}`;
    } catch (e) {
        return dateString;
    }
  };

  return (
    <div className="min-h-screen bg-juve-gray text-black pt-24 pb-12">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Header Dashboard */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center gap-4">
            <div className="bg-black text-white p-3 rounded-lg shadow-md">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <h1 className="font-display font-black text-2xl uppercase tracking-tighter">Elenco Soci</h1>
              <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">Visualizzazione Area Riservata</p>
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

        {/* Main Content Card */}
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 flex flex-col min-h-[600px]">
            
            {/* Search Bar */}
            <div className="relative mb-6">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input 
                    type="text" 
                    placeholder="Cerca per cognome o nome..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-juve-gold text-base shadow-inner uppercase"
                />
            </div>

            {/* Header Columns */}
            <div className="grid grid-cols-12 gap-4 px-4 py-3 bg-black text-white rounded-t-lg font-display font-bold uppercase text-xs tracking-wider">
                <div className="col-span-8 flex items-center gap-2">
                    <User className="w-4 h-4 text-juve-gold" />
                    Nominativo
                </div>
                <div className="col-span-4 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-juve-gold" />
                    Data di Nascita
                </div>
            </div>

            {/* List */}
            <div className="flex-1 overflow-y-auto">
                <div className="divide-y divide-gray-100">
                    {filteredMembers.map((member, index) => (
                        <div key={member.id} className={`grid grid-cols-12 gap-4 px-4 py-4 items-center hover:bg-gray-50 transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
                            <div className="col-span-8">
                                <span className="font-bold text-sm uppercase text-gray-800 block">
                                    {member.name}
                                </span>
                            </div>
                            <div className="col-span-4">
                                {member.birthDate ? (
                                    <span className="text-sm font-mono text-gray-600 bg-gray-100 px-2 py-1 rounded border border-gray-200">
                                        {formatDate(member.birthDate)}
                                    </span>
                                ) : (
                                    <span className="text-xs text-gray-300 italic">Non presente</span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {filteredMembers.length === 0 && (
                    <div className="text-center py-20 flex flex-col items-center opacity-50">
                        <Users className="w-12 h-12 mb-4 text-gray-300" />
                        <p className="text-gray-400 text-sm font-bold uppercase">Nessun socio trovato</p>
                    </div>
                )}
            </div>
            
            <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center text-xs text-gray-500 font-bold uppercase">
                <span>Totale Soci: {members.length}</span>
                <span className="text-juve-gold">Modalità Sola Lettura</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
