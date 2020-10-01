const app = {

    init: () => {
        const question = document.getElementById('questionSubmitId');
        console.log(question)
        question.addEventListener('submit', app.magicWorks);

    },


    magicWorks: () => {

      event.preventDefault();




        let randomNumber = Math.floor(Math.random() * 8);
        let eightBall = '';

        switch (randomNumber) {
            case 0:
                eightBall = 'It is certain';
                break;
            case 1:
                eightBall = 'It is decidedly so';
                break;
            case 2:
                eightBall = 'Reply hazy try again';
                break;
            case 3:
                eightBall = 'Reply hazy try again';
                break;
            case 4:
                eightBall = 'Cannot predict now';
                break;
            case 5:
                eightBall = 'Do not count on it';
                break;
            case 6:
                eightBall = 'My sources say no';
                break;
            case 7:
                eightBall = 'Outlook not so good';
                break;
            case 8:
                eightBall = 'Signs point to yes';
                break;
            default:
                eightBall = `I'm not feeling it today`;
                break;
        }

        const text = document.createElement("p"); 
        console.log(eightBall);
        const node = document.createTextNode(eightBall);
        text.appendChild(node);

        const container = document.getElementById('hereGoesTheAnswer');
        text.classList.add('animate__animated', 'animate__fadeIn');

        setTimeout(() => {
            container.appendChild(text);

        }, 1000)
        document.getElementById('hereGoesTheAnswer').value ='';

        


    }
}

document.addEventListener('DOMContentLoaded', app.init)