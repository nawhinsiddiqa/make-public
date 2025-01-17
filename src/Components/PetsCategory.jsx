import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import usePet from '../hooks/usePet';
import PetCard from './PetCard';

const PetsCategory = () => {
    const[tabIndex,setTabIndex] = useState(0)
    const[pet] =usePet();
    const cat =pet.filter(item =>item.petCategory === 'cat');
    const dog =pet.filter(item =>item.petCategory === 'dog');
    const rabbit =pet.filter(item =>item.petCategory === 'rabbit');
    const bird =pet.filter(item =>item.petCategory === 'bird');
    const fish =pet.filter(item =>item.petCategory === 'fish');
    
    return (
        <div >
            <h1 className='text-5xl font-bold script text-center text-green-500'>Pets Category section</h1>
            <p className='my-5 text-center text-xl'>Dogs, cats, birds, and some other animals are kept as household pets.consider pets as a family, their ability to provide social support is enhanced.</p>
            <Tabs  defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Cat</Tab>
                    <Tab>Dog</Tab>
                    <Tab>Rabbit</Tab>
                    <Tab>Bird</Tab>
                    <Tab>Fish</Tab>
                </TabList>
                <TabPanel>
                  <div className=' w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 my-10 gap-4'>
                  {
                        cat.map(item => <PetCard item={item}></PetCard>)
                    }
                  </div>
                </TabPanel>
                <TabPanel>
                {
                        dog.map(item => <PetCard item={item}></PetCard>)
                    } 
                </TabPanel>
                <TabPanel>
                {
                        rabbit.map(item => <PetCard item={item}></PetCard>)
                    }
                </TabPanel>
                <TabPanel>
                {
                        bird.map(item => <PetCard item={item}></PetCard>)
                    }
                </TabPanel>
                <TabPanel>
                {
                        fish.map(item => <PetCard item={item}></PetCard>)
                    } 
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default PetsCategory;