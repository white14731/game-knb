const rock = document.querySelector('.rock')
const paper = document.querySelector('.paper')
const scissors = document.querySelector('.scissors')

const listPlayer = document.querySelector('.game-list-player')
const listComputer = document.querySelector('.game-list-computer')
const resultDisp = document.querySelector('.resultDisplay')

// const winP = document.querySelector('.win-player')
// const winC = document.querySelector('.win-computer')


let Arr = ['Камень', 'Бумага', 'Ножницы']

let message = ''

let result = Number

    function myGame(element) {
        const AI = Arr[Math.floor(Math.random() * 3)]

        if (element === AI) {
            message = `Ничья`
        }
        else {
            switch (element) {
                case 'Камень':
                    message = (AI === 'Ножницы') ? 'Ты победил!' : 'Ты проиграл :('
                    break
                case 'Бумага':
                    message = (AI === 'Камень') ? 'Ты победил!' : 'Ты проиграл :('
                    break
                case 'Ножницы':
                    message = (AI === 'Бумага') ? 'Ты победил!' : 'Ты проиграл :('
                    break
            }
        }
        switch (message) {
            case 'Ты победил!':
                resultDisp.classList.add('green')
                resultDisp.classList.remove('red')
                break
            case 'Ты проиграл :(':
                resultDisp.classList.add('red')
                resultDisp.classList.remove('green')
                break
        }
        listPlayer.textContent = `Игрок: ${element}`
        listComputer.textContent = `Комьютер: ${AI}`
        resultDisp.textContent = message

    }


