let vm = Vue.createApp({
   data() {
      return {
         hOffset: 0,
         vOffset: 0,
         blur: 0,
         spread: 0,
         shadowColor: "#000",
         backgroundColor: '#AFE1AF',
         textColor: 'black',
         boxColor: 'black',
         inset: false
      }
   },
   computed: {
      getBoxStyles() {
         if (this.inset === true) {
            return {
               'box-shadow': `${this.hOffset}px ${this.vOffset}px ${this.blur}px ${this.spread}px ${this.shadowColor} inset`,
               'background-color': `${this.boxColor}`
            }
         } else {
            return {
               'box-shadow': `${this.hOffset}px ${this.vOffset}px ${this.blur}px ${this.spread}px ${this.shadowColor}`,
               'background-color': `${this.boxColor}`
            }
         }
      },

      getTextStyles() {
         if (this.inset === true) {
            return {
               'text-shadow': `${this.hOffset}px ${this.vOffset}px ${this.blur}px ${this.shadowColor} inset`,
               'color': `${this.textColor}`
            }
         } else {
            return {
               'text-shadow': `${this.hOffset}px ${this.vOffset}px ${this.blur}px ${this.shadowColor}`,
               'color': `${this.textColor}`
            }
         }
      },

      getTextContainerStyles() {
         return {
            'background-color': `${this.backgroundColor}`
         }
      },

      getBoxContainerStyles() {
         return {
            'background-color': `${this.backgroundColor}`
         }
      }
   },
   methods: {
      reset() {
         this.hOffset = 0;
         this.vOffset = 0;
         this.blur = 0;
         this.spread = 0;
         this.shadowColor = "#000";
         this.backgroundColor ='#AFE1AF';
         this.textColor = 'black';
         this.boxColor = 'black';
         this.inset = false;
         this.color = '#000';
      },

      async copyBoxShadow() {
         let text = `box-shadow: "${this.hOffset}px ${this.vOffset}px ${this.blur}px ${this.spread}px ${this.shadowColor}`
         // end the box-shadow value
         this.inset? text+= ' inset"' : text+= '"'
         
         await navigator.clipboard.writeText(text)

         alert('box-shadow copied to clipboard!')
      },

      async copyTextShadow() {
         let text = `text-shadow: "${this.hOffset}px ${this.vOffset}px ${this.blur}px ${this.shadowColor}"`
         
         await navigator.clipboard.writeText(text)

         alert('text-shadow copied to clipboard!')
      }
   }
})

vm.mount('#app')