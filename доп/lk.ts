// Тип данных для подрядчика (пример)
type ContractorInfo = {
    fullName: string;
    shortName: string;
    companyId: string;
    foundationDate: string;
    contactPerson: string;
    contactPosition: string;
    contactEmail: string;
    contactPhone: string;
    contactAddress: string;
    revenueFile: { name: string; url: string };
    commercialOffer: { name: string; url: string };
    legalAddress: string;
    inn: string;
    kpp: string;
    taxForm: string;
    okved: string;
    gsCooperationFile: { name: string; url: string };
};

// эмуляция данных
const contractorData: ContractorInfo = {
    fullName: 'ООО "СтройИнвест"',
    shortName: 'СтройИнвест',
    companyId: '9876543210',
    foundationDate: '2010-05-12',
    contactPerson: 'Иванов Иван Иванович',
    contactPosition: 'Директор',
    contactEmail: 'director@stroiinvest.ru',
    contactPhone: '+7 999 123-45-67',
    contactAddress: 'г. Москва, ул. Строителей, 12',
    revenueFile: { name: 'revenue.xlsx', url: '/docs/revenue.xlsx' },
    commercialOffer: { name: 'offers.xlsx', url: '/docs/offers.xlsx' },
    legalAddress: 'г. Москва, ул. Ленина, 1',
    inn: '1234567890',
    kpp: '987654321',
    taxForm: 'УСН',
    okved: '41.20 — Строительство жилых зданий',
    gsCooperationFile: { name: 'cooperation.xlsx', url: '/docs/cooperation.xlsx' }
};

// функция для заполнения
function fillInfo(data: ContractorInfo) {
    (document.getElementById('fullName') as HTMLElement).textContent = data.fullName;
    (document.getElementById('shortName') as HTMLElement).textContent = data.shortName;
    (document.getElementById('companyId') as HTMLElement).textContent = data.companyId;
    (document.getElementById('foundationDate') as HTMLElement).textContent = data.foundationDate;
    (document.getElementById('contactPerson') as HTMLElement).textContent = data.contactPerson;
    (document.getElementById('contactPosition') as HTMLElement).textContent = data.contactPosition;
    (document.getElementById('contactEmail') as HTMLElement).textContent = data.contactEmail;
    (document.getElementById('contactPhone') as HTMLElement).textContent = data.contactPhone;
    (document.getElementById('contactAddress') as HTMLElement).textContent = data.contactAddress;
    (document.getElementById('revenueFile') as HTMLElement).innerHTML = `<a href="${data.revenueFile.url}" target="_blank">${data.revenueFile.name}</a>`;
    (document.getElementById('commercialOffer') as HTMLElement).innerHTML = `<a href="${data.commercialOffer.url}" target="_blank">${data.commercialOffer.name}</a>`;
    (document.getElementById('legalAddress') as HTMLElement).textContent = data.legalAddress;
    (document.getElementById('inn') as HTMLElement).textContent = data.inn;
    (document.getElementById('kpp') as HTMLElement).textContent = data.kpp;
    (document.getElementById('taxForm') as HTMLElement).textContent = data.taxForm;
    (document.getElementById('okved') as HTMLElement).textContent = data.okved;
    (document.getElementById('gsCooperationFile') as HTMLElement).innerHTML = `<a href="${data.gsCooperationFile.url}" target="_blank">${data.gsCooperationFile.name}</a>`;
}

// Заполнение при загрузке
window.addEventListener('DOMContentLoaded', () => {
    fillInfo(contractorData);
});
