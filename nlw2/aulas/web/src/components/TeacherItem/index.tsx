import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
        <header>
            <img src="https://media-exp1.licdn.com/dms/image/C4D03AQHpNL9rzJN9cA/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=6tAk3us9HN_xQyhqXlXU4jYnEUDk75z0oAJe3HSx7EU" alt="Vando dos reis"/>
        
        <div>
            <strong>Vando Dos Reis</strong>
            <span>Química</span>
        </div>
        </header>

        <p>
            Entusiasta das melhores tecnologias de química avançada.
            <br /> <br />
            Apaixonado por explodir as coisas em laboratôrio e por mudar a vida das pessoas atravês de experiências. Mais de 2000 mil pessoas já foram vitimas das minhas explosões.
        </p>

        <footer>
            <p>
              Preço/hora
              <strong>R$ 95,25</strong>  
            </p>
            <button type="button">
                <img src={whatsappIcon} alt="Whatsapp"/>
                Entrar em contato
            </button>
        </footer>
    </article>
    );
}

export default TeacherItem;