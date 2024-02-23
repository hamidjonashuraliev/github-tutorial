// scope va context - object

const person = {
    ism: "john",
    yosh: 30,
    millati: "uzbek",

    salom_berin() {
        console.log("assalomu alaykum");
    },
    hayrlashing() {
        console.log("salomat bo'ling");
    },
    tonishtiring() {

        const action = () =>  {
            console.log(this);
            const name = this.ism;
            console.log(name);

        }
        action();
        console.log(
            `mening ismim ${this.ism} va mening millatim ${this.millati}`
        );
    },
};
person.tonishtiring();
