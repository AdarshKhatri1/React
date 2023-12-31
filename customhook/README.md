###
1. If you return something from customhook then you should also access that in same format 
custom hook             where you use custom hook
return val              const val = useCoustomhook
return [val]            const [val] = usecoustomhook
return [obj]            const [val] = usecoustomhook

2. Always use (use) keyword in custom hook before naming becoz react always maintain order of hooks, if not follow then you see some issue,
eg. if you use first usecustomhook__1() and then 2nd usecustomhook__2()(and if 2nd usecustomhook__2 is depend one 1st usecustomhook__1 then it will  not get data from 1st and not render in dom )
so if there use (use) keyword then  react add your customhook in the order and vice-versa.

3. you can also pass argument and can be access from props
4. if there is same value in two different customhook like(const [text,setText] = useState() ) then the changes in text in customhook__1 can't be reflected in customhook_2 and viceversa becoz both are lexically different place.

5. In Redux we can share the same state but here not 
6. custom hook are called functional component without jsx.

const [text,setText] = useState("");

    useEffect(()=>{
        const time = setTimeout(()=>{
        
            setText("I am in the One")
        
        },2000)
    },[])

    In One.jsx and Two.jsx these things are written so 
    UseCustom hooks comes here you can reuse login than repeating same code.

    so in Third.jsx see how work

four.jsx = passing props in customhook