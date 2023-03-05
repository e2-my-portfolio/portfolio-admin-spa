import TextInput from '@/components/input/text-input';
import Input from '@/components/input/text-input'
import React, { use } from 'react'
import { Async } from 'react-async';
import { Basics, getBasics } from './api/basics';

// const inter = Inter({ subsets: ['latin'] })

export default function Home(): React.ReactNode {

  return (
    <Async promiseFn={getBasics}>
      {({ data, error, isLoading }) => {
        if (isLoading) return "Loading...";
        if (error) return `Something went wrong: ${error.message}`;
        if (data)
          return (
            <>
              <div>
                <TextInput label='name' id='name' value={data.name} />
              </div>

              <div>
                <TextInput label='surname' id='surname' value={data.surname}  />
              </div>
              
              <div>
                <TextInput label='country' id='country' value={data.country}  />
              </div>
            </>
          );
        return null;
      }}
    </Async>
  );
}
