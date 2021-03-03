const expect = chai.expect
const assert = chai.assert



describe('testing', () => {
  it('testing A', (done) => {
    setTimeout(() => {
      const userDetails = document.querySelector('#users-show')
      const aLink = document.querySelector('#a')
      aLink.click()
      expect(userDetails.innerText).to.contain('Details About A')
      expect(userDetails.innerText).not.to.contain('Details About B')
      done()
    }, 500)
  })

  it('testing B', (done) => {
    setTimeout(() => {
      try {
        const userDetails = document.querySelector('#users-show')
        const bLink = document.querySelector('#b')
        bLink.click()
        expect(userDetails.innerText).to.contain('Details About B')
        expect(userDetails.innerText).not.to.contain('Details About A')
        done()
      } catch (error) {
        done(error)
      }
    }, 1000)
  })

  it('testing C', (done) => {
    setTimeout(() => {
      const userDetails = document.querySelector('#users-show')
      const cLink = document.querySelector('#c')
      cLink.click()
      expect(userDetails.innerText).to.contain('Details About C')
      expect(userDetails.innerText).not.to.contain('Details About A')
      done()
    }, 1500)
  })
})
