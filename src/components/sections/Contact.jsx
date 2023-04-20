import React from 'react'
import {Button, Input, TelInput, TextArea} from '../index';

const Contact = () => {
  
    const formId = "contactForm";

    return (
      <section id="contact" className='sm:my-10'>
          <div className='flex md:flex-row mx-auto flex-col md:w-[70%] md:gap-12'>
            <div className='flex-1 my-5 flex flex-col justify-evenly'>
              <h2 className='text-center font-bold sm:text-[40px] text-[32px] text-secondary'>Umówmy się na trening</h2>
              <div className="bg-primary sm:w-[600px] w-[100%] h-[2px] mb-16 mx-auto" />
              <div className='flex flex-col  '>
                <div className='flex flex-col'>
                  <Input formId={formId} type={"text"} forName={"subject"} labelName={"Temat wiadomości"} placeholder={"Podaj temat w sprawie którego kontaktujesz się z nami"} isRequired={true}/>
                  <Input formId={formId} type={"email"} forName={"email"} labelName={"Twój adres e-mail"} placeholder={"Wprowadź adres e-mail"} isRequired={true}/>
                  <TelInput formId={formId} forName={"tel"} labelName="Numer telefonu" placeholderName="Podaj numer telefonu" name="tel" isRequired={false}/>
                  <Input formId={formId} type={"text"} forName={"name"} labelName={"Imię"} placeholder={"Wpisz swoje imię"} isRequired={false}/>
                  <TextArea formId={formId} forName={"message"} labelName="Treść wiadomości" placeholderName="Napisz treść swojej wiadomości." name="message" isRequired={true}/>
                </div>
                <div className='w-[40%] flex-center mx-auto my-8'>
                  <Button text="Wyślij" background={"bg-orange-gradient"} border={""} color={"text-white"}/>
                </div>
              </div>
            </div>
          </div>
      </section>
    )
}

export default Contact