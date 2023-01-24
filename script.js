document.addEventListener('DOMContentLoaded', () => {
  const $tip = document.querySelector('#tip')
  const $sumPerson = document.querySelector('#sum-person')
  const $sum = document.querySelector('#sum')
  const $amountPeople = document.querySelector('#amount')
  let $activeRadio = document.querySelector('input[type=radio]:checked')
  const $total = document.querySelector('#button')
  const $allRadios = document.querySelectorAll('[name=radio-button]')


  $total.addEventListener('click', () => {
    $allRadios.forEach(el => {
      if (el.checked) {
        $activeRadio = el
      }
    })
    $tip.textContent = (($sum.value / 100) * Number.parseFloat($activeRadio.value)).toFixed(2);
    $sumPerson.textContent = ((+$sum.value + +$tip.textContent) / $amountPeople.value).toFixed(2);
  })
})