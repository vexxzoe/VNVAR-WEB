import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface QuoteFormProps {
  productName?: string;
  type?: string;
}

export const QuoteForm: React.FC<QuoteFormProps> = ({ productName, type }) => {
  const { t } = useLanguage();
  return (
    <div className="flex flex-col w-full h-full min-h-0">
      {/* Iframe Body */}
      <div className="flex-1 overflow-y-auto custom-scrollbar bg-white/5 p-2 md:p-4 rounded-t-[32px] md:rounded-none w-full">
        <div className="rounded-[32px] overflow-hidden bg-white shadow-2xl w-full">
          <iframe
            src="https://znc.vncrm.net/crm/formdata?l=znc&s=b94a65f1-3b2e-4da8-9728-f8389d4249eb&d=6%2fqi1SbOFnz8JASKA0AXUFqw6ODBXZSq7SbSJna2IxBD001d4ADbRiWiCMEJ5Y6eX%2fqTgveHsUjZjYIyk6y%2bwt9Llm09RBB8skThNQQY%2fqdr0LkBScVOmg8eFjuaX%2bCXacWP%2fVGS0gi1I5pY%2fDeVui%2folOJvSLqN2Pi1Jb2ZFScdYmcjn5gDPJ0nk5G7PZOlbSwGkQDKSQf%2fhd1MsS%2bKeC2Il%2fPuwRFCJd%2bkRENI6ZibVpOSOEC5wUJcdU3uF0T0%2fQ5IXDKHGk0aIQUuGiVqcuIRqx4Vmy09Iz7W9eJODCb52qbLIxVOX9%2f2IFzmJzqiSy7T6ve73Z71TzEueNuugPSoK2lyG4ufm4EbXRa%2fySzKk9IrFoWAjZOLtCB55zlaQbNJU0zSc%2bFB9Vg%2f9sYHBHNF4SLfgQG%2b4krLKBGI0UNFne6CoalIph5dkgjiJV0jU6iKdNn8lYhpDQPVR32kk1JaCJo5WStwl7kn%2bbN9cGe8kr1GM8oEiPLugZMBV0LLeKGeGujMsrLzRQtqS7J4L09e8qbPFcYGKtZ%2fmV%2f9k1k%3d"
            style={{ width: '100%', height: '750px', border: 'none' }}
            frameBorder="0"
            scrolling="no"
            title="CRM Contact Form"
            aria-label={t.contact.form.title}
          />
        </div>
      </div>

      {/* Footer Note */}
      <div className="p-6 bg-[#0a0f18] text-center border-t border-white/5 mt-auto">
        <p className="text-[10px] text-white/30 font-bold uppercase tracking-widest flex items-center justify-center gap-2">
          <CheckCircle2 className="w-3 h-3 text-accent-400" /> {t.contact.form.privacy}
        </p>
      </div>
    </div>
  );
};
