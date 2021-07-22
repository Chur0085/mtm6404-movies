const invoices = [
  {
    number: 'BBRFL',
    client: 'Ellison Daugherty',
    amount: 8800,
    status: 'Paid'
  },
  {
    number: 'TYUBK',
    client: 'Myrna Vinson',
    amount: 4097,
    status: 'Paid'
  },
  {
    number: 'IRUBR',
    client: 'Mcmillan Warner',
    amount: 6466,
    status: 'Draft'
  },
  {
    number: 'WOAWJ',
    client: 'Salas Strickland',
    amount: 2762,
    status: 'Draft'
  },
  {
    number: 'NNJWP',
    client: 'House Chandler',
    amount: 8050,
    status: 'Paid'
  },
  {
    number: 'TAADE',
    client: 'Fry Kinney',
    amount: 2666,
    status: 'Draft'
  },
  {
    number: 'AVYCD',
    client: 'Tammy Roberson',
    amount: 2245,
    status: 'Paid'
  },
  {
    number: 'XZIFA',
    client: 'Hoffman Aguirre',
    amount: 1340,
    status: 'Paid'
  },
  {
    number: 'BQHDI',
    client: 'Hardin Massey',
    amount: 4295,
    status: 'Pending'
  },
  {
    number: 'RRBAF',
    client: 'Lacy Burke',
    amount: 9010,
    status: 'Paid'
  },
  {
    number: 'QGZQM',
    client: 'Jessie Morse',
    amount: 3956,
    status: 'Draft'
  },
  {
    number: 'XPUFB',
    client: 'Lourdes Buckner',
    amount: 7253,
    status: 'Draft'
  },
  {
    number: 'PVEAE',
    client: 'Gail Burch',
    amount: 8152,
    status: 'Paid'
  },
  {
    number: 'WSQLT',
    client: 'Hopkins Cruz',
    amount: 3835,
    status: 'Draft'
  },
  {
    number: 'MXOCY',
    client: 'White Bright',
    amount: 7068,
    status: 'Pending'
  },
  {
    number: 'NFUFS',
    client: 'Pansy Guthrie',
    amount: 2822,
    status: 'Pending'
  },
  {
    number: 'MQHVU',
    client: 'Sybil Hines',
    amount: 6012,
    status: 'Pending'
  },
  {
    number: 'SPTCP',
    client: 'Rhoda Christian',
    amount: 6561,
    status: 'Paid'
  },
  {
    number: 'EYGBU',
    client: 'Blanchard Hobbs',
    amount: 5347,
    status: 'Paid'
  },
  {
    number: 'DHJLW',
    client: 'Freeman Mcmahon',
    amount: 2576,
    status: 'Pending'
  }
]
function serialNumber (length) {
  const numbers = []

  for (let i = 0; i < length; i++) {
    const randomNumber = Math.floor(Math.random() * (92 - 65)) + 65
    numbers.push(String.fromCharCode(randomNumber))
  }

  return numbers.join('')
}
const app = Vue.createApp({
  data: function () {
    return {
      invoices: invoices,
      invoice: '',
      sort: 'filter',
    }
  },
  /*created: function () {
    const invoices = localStorage.getInvoice('invoices')

    if (invoices) {
      this.invoices = JSON.parse(invoices)
    }
  },*/
  methods: {
    filterinvoices: function () {
      return this.invoices.filter(invoice => invoice.client.toLowerCase().includes(this.invoice.toLowerCase()))
    },
    sortinvoices: function () {
      return this.filterinvoices().sort((a, b) => {
        if (a[this.sort] < b[this.sort]) {
          return -1 
        } else if (a[this.sort] < b[this.sort]
            ) {
          return 1 
        } else {
          return 0
          }
      })
    },

    created: function () {
      const invoices = localStorage.getItem('invoices')
  
      if (cards) {
        this.invoices = JSON.parse(invoices)
      }
    },
    

    addItem: function () {
      this.invoices.push({
          title: this.invoice,
          complete: false
      })
      this.invoice = ''
  },
    removeItem: function (index) {
      this.invoices.splice(index, 1)
    },
    computed: {
      remaining: function(){
        return this.invoices.filter(invoice => !invoice.complete).length
      }
    }
  },
  watch: {
    invoices: {
        deep: true,
        handler: function () {
            localStorage.setItem('invoices', JSON.stringify(this.invoices))

        }
      }
    }
})
const vm = app.mount('#app')


