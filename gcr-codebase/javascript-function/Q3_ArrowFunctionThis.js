let user = {
    name: "Anushka",

    showName: () => {
        console.log(this.name);
    }
};

user.showName();

let user2 = {
    name: "Anushka",

    showName: function() {
        console.log(this.name);
    }
};

user2.showName();