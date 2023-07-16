
new Vue({
    el: '#nav',
    data: {
        items:[
            'Domki umieszczane na drzewie',
            'Domki montowane na ziemi'
        ],
        items2:[
            'Domki dla kotów',
            'Domki dla psów',
            'Domki dla królików',
            'Domki dla małp',
            'Domki dla ptaków'
        ],
        showDropdown: false,
        menuItems: [
            { name: 'O nas', link: '#' },
            { name: 'Oferta', link: '#' },
            { name: 'Cennik', link: '#' },
            { name: 'Kontakt', link: '#' },
        ],
        image1:"./images/domek1.jpg",
        image2:"./images/domek2.jpg",
        image3:"./images/domek3.jpg",
        image4:"./images/domek4.jpg",
        image5:"./images/domek5.jpg"

    },
    methods: {
      toggleDropdownIcon() {
        this.showDropdown = !this.showDropdown;
      },
    },
})

new Vue({
    el: '#app',
    data: {
      products: [
        { id: 1, name: 'Dom na drzewie', category: 'Na drzewie', price: 500 },
        { id: 2, name: 'Dom na ziemi', category: 'Na ziemi', price: 400 },
        { id: 3, name: 'Dom dla królika', category: 'Dla królików', price: 100 },
        { id: 4, name: 'Dom dla ptaka', category: 'Dla ptaków', price: 80 },
        { id: 5, name: 'Dom dla kota', category: 'Dla kotów', price: 200 },
        { id: 6, name: 'Dom dla psa', category: 'Dla psów', price: 300 },
        { id: 7, name: 'Dom dla małpy', category: 'Dla małp', price: 600 }
      ],
      searchTerm: '',
      sortBy: '',
      sortByPrice: false,
      sortDirection: 'asc',
      newProduct: {
        name: '',
        category: '',
        price: null
      }
    },
    computed: {
      filteredProducts() {
        return this.products.filter(product => product.name.toLowerCase().includes(this.searchTerm.toLowerCase()));
      }
    },
    methods: {
      sortProducts(column) {u
        if (column === this.sortBy) {
          this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
        } else {
          this.sortBy = column;
          this.sortDirection = 'asc';
        }

        this.products.sort((a, b) => {
          const aValue = a[column];
          const bValue = b[column];

          
          if (column === 'price') {
            if (this.sortDirection === 'asc') {
              return a.price - b.price;
            } else {
              return b.price - a.price;
            }
          } else {
            if (this.sortDirection === 'asc') {
              return aValue.localeCompare(bValue);
            } else {
              return bValue.localeCompare(aValue);
            }
          }
        });
      },
      addProduct() {
        if (this.newProduct.name && this.newProduct.category && this.newProduct.price) {
          const newId = this.products.length + 1;
          const newProduct = {
            id: newId,
            name: this.newProduct.name,
            category: this.newProduct.category,
            price: this.newProduct.price
          };

          this.products.push(newProduct);
          this.newProduct.name = '';
          this.newProduct.category = '';
          this.newProduct.price = null;
        } else {
          alert('Proszę wypełnić wszystkie pola produktu.');
        }
      }
    }
  })

  new Vue({
    el: '#calculat',
    data: {
      amount: null,
      fromCurrency: '',
      toCurrency: '',
      currencies: [
        { code: 'ZŁ', name: 'ZŁ' },
        { code: 'EUR', name: 'EUR' },

      ],
      rates: {
        ZŁ: 4.5,
        EUR: 0.22,
      },
      result: null
    },
    methods: {
      convert() {
        if (this.amount && this.fromCurrency && this.toCurrency) {
          const fromRate = this.rates[this.fromCurrency];
          const toRate = this.rates[this.toCurrency];
          this.result = (this.amount / fromRate).toFixed(1);
        } else {
          alert('Proszę wypełnić wszystkie pola.');
        }
      }
    }
  })

