import React, {useState} from 'react';
import Personal from './components/input/personal'
import PersonalView from './components/display/personalView';
import Experience from './components/input/experience'
import ExperienceView from './components/display/experienceView.js';
import uniqid from 'uniqid';

function App(){
    const [personal, setPersonal] = useState({
        firstName: '',
        lastName: '',
        title: '',
        address: '',
        phone: '',
        email: ''
    })
    const [experience, setExperience] = useState([
        {
        id: uniqid(),
        position: '',
        company: '',
        city: '',
        from: '',
        to: ''
        }
    ])


    function onChangePersonal(e){
        const {name, value} = e.target
        setPersonal({...personal, [name]: value})
    }


    const onChangeExp = (e, id) => {
        const { name, value } = e.target
    
        setExperience((prevState) => {
          const newExperience = prevState.map((experienceItem) => {
            if (experienceItem.id === id) {
              return { ...experienceItem, [name]: value }
            }
            return experienceItem
          })
          return [...newExperience]
        })
      }

    const onAddExp = () => {
        setExperience((prevState) => {
            const newExperience = {
                id: uniqid(),
                position: '',
                company: '',
                city: '',
                from: '',
                to: ''
                }

        return [...prevState, newExperience]
        })
    }

    const addExpButton = () => {
        return (
        <button text="Add Experience" onClick={onAddExp()}></button>
        )
    }

    const deleteExp = (id) => {
        setExperience( (prevState) => (
            prevState.filter((experienceItems) => {
                return (experienceItems.id !== id) 
            }
        )))
    }

    const experienceInputs = experience.map((experienceInput) => (
        <Experience 

        key={experienceInput.id}

        id={experienceInput.id}

        position={experienceInput.position} 
        changePosition={onChangeExp}

        company={experienceInput.company} 
        changeCompany={onChangeExp}

        city={experienceInput.city} 
        changeCity={onChangeExp}

        from={experienceInput.from} 
        changeFrom={onChangeExp}

        to={experienceInput.to} 
        changeTo={onChangeExp}

        deleteExp={deleteExp}
        />
    ))

    const experienceView = experience.map((experienceView) => (
        <ExperienceView
        key= {uniqid()}
        position={experienceView.position}
        company={experienceView.company}
        city={experienceView.city}
        from={experienceView.from}
        to={experienceView.to}
        />
    ))

    return(
        <div>
            <Personal 
            firstName={personal.firstName} 
            changeFirstName={onChangePersonal}

            lastName={personal.lastName} 
            changeLastName={onChangePersonal}

            title={personal.title} 
            changeTitle={onChangePersonal}

            address={personal.address} 
            changeAddress={onChangePersonal}

            phone={personal.phone} 
            changePhone={onChangePersonal}

            email={personal.email} 
            changeEmail={onChangePersonal}
            />

            {experienceInputs}


            <PersonalView 
            firstName={personal.firstName}
            lastName={personal.lastName}
            title={personal.title}
            address={personal.address}
            phone={personal.phone}
            email={personal.email}
            />

            {experienceView}
            
            <button onClick={addExpButton}>Add Experience</button>
        
        </div>
    )

}



export default App;
