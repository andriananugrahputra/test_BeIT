var app = new Vue({
    el: '#app',
    data: {
        users: null
    },
    created: function () {
        this.getUsers()
    },
    methods: {
        // Get User
        getUsers: function () {
            axios.get('https://www.penyewaankapal.attayasagroup.co.id/public/api/renter')
                .then(res => {
                    this.users = res.data;
                })
                .catch(err => {
                    // handle error
                    console.log(err);
                })
        },
 
        // Create New User
        addUsers: function () {
            axios.post('https://www.penyewaankapal.attayasagroup.co.id/public/api/renter', {
                name: this.userName,
                card_id: this.userCardID,
                address: this.userAddress,
                phone: this.userPhone,
                photo: this.userPhoto
            })
            .then(res => {
                // handle success
                this.getUsers();
                this.userName = '';
                this.userCardID = '';
                this.userAddress = '';
                this.userPhone = '';
                this.userPhoto = '';
                this.dialogAdd = false;
            })
            .catch(err => {
                // handle error
                console.log(err);
            })
        },
 
        // Get Edit and Show data to Modal
        getEdit: function (users) {
            this.dialogEdit = true;
            this.userIdEdit = users.id;
            this.userNameEdit = users.name;
            this.userCardIdEdit = users.card_id;
            this.userAddressEdit = users.address;
            this.userPhoneEdit = users.phone;
            this.userPhotoEdit = users.photo;
        },
 
        // Get Delete and Show Confirm Modal
        getDelete: function (product) {
            this.dialogDelete = true;
            this.userIdDelete = users.id;
            this.userNameDelete = users.name;
            this.userCardIdDelete = users.card_id;
            this.userAddressDelete = users.address;
            this.userPhoneDelete = users.phone;
            this.userPhotoDelete = users.photo;
        },
 
        // Update User
        updateUser: function () {
            axios.put(`https://www.penyewaankapal.attayasagroup.co.id/public/api/renter/${this.userIdEdit}`, {
                name: this.userNameEdit,
                card_id: this.userCardIDEdit,
                address: this.userAddressEdit,
                phone: this.userPhoneEdit,
                photo: this.userPhotoEdit
            })
            .then(res => {
                // handle success
                this.getUsers();
                this.dialogEdit = false;
            })
            .catch(err => {
                // handle error
                console.log(err);
            })
        },
 
        // Delete User
        deleteUser: function () {
            axios.delete(`https://www.penyewaankapal.attayasagroup.co.id/public/api/renter/${this.userIdDelete}`)
            .then(res => {
                // handle success
                this.getUsers();
                this.dialogDelete = false;
            })
            .catch(err => {
                // handle error
                console.log(err);
            })
        }
    }
});