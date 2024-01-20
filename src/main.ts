import './style.css'

const O_REILLY_BASE = 'https://oreil.ly'

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector<HTMLFormElement>('#short-url')
  const input = document.querySelector<HTMLInputElement>('input[name="path"]')

  if (!form || !input) throw new Error('Form or input not found')

  function generatePath() {
    const path = input?.value
    return path ? `${O_REILLY_BASE}/${path}` : O_REILLY_BASE
  }

  form.addEventListener('submit', event => {
    event.preventDefault()
    window.open(generatePath(), '_blank')
  })

  const copy = document.querySelector('#copy')!
  copy.addEventListener('click', () => {
    navigator.clipboard.writeText(generatePath())
  })
})
