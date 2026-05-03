import { createContext, PropsWithChildren, use, useState } from "react";


type CountContextType = {
    count: number;
    increaseCount: () => void;
    decreaseCount: () => void;
    resetCount: () => void;
}
const CountContext = createContext<CountContextType>({
    count: 0,
    increaseCount: () => {},
    decreaseCount: () => {},
    resetCount: () => {},
})
export const CountContextProvider = ({ children }: PropsWithChildren) => {
    const [count, setCount] = useState(0);
    const increaseCount = () => {
        setCount(prev => prev+1)
    }
    const decreaseCount = () => {
        setCount(prev => prev-1)
    }
    const resetCount = () => {
        setCount(0)
    }
    return (
        <CountContext value={{ count, increaseCount, decreaseCount, resetCount }}>
            {children}
        </CountContext>
    )
}
export const useCount = () => use(CountContext)


//1. useState
//2. useContext/zustand/redux = tempority

//3. AsyncStorage,mmkv without encrytion
//4. secure-store / mmkv encrypted = encrytion
//3,4 ka key value tane nae pone zan nae a loat loat dal


//5. sql lite/realm