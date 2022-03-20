export default (context, inject) => {
   inject('storage', () => {
      const getItem = (key) => {
         try {
            return JSON.parse(localStorage.getItem(key))
         } catch (e) {
            console.error('Error getting item', e)
            return null
         }
      }

      const setItem = (key, data) => {
         try {
            localStorage.setItem(key, JSON.stringify(data))
         } catch (e) {
            console.error('Error saving item', e)
         }
      }

      const delItem = (key) => {
         try {
            localStorage.removeItem(key)
         } catch (e) {
            console.error('Delete item localStorage')
         }
      }

      return {
         getItem,
         setItem,
         delItem,
      }
   })
}
