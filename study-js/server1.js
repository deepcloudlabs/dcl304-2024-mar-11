const {Observable} = require("rxjs");
const observable = new Observable(
    observer => {
        let counter = 0; // model
        const id = setInterval(
            ()=>{
                counter++;
                observer.next(counter);
            },500
        );
        return function unsubscribe(){
            console.log("unsubscribed.");
            clearInterval(id) ;
        };
    }
)

const subscription = observable.subscribe( model => {
    console.log(`New model value: ${model}`);
});

setTimeout( () => {
    subscription.unsubscribe();
}, 30_000)