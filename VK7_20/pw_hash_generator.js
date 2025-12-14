// luodaan salasanasta hash
const bcrypt = require('bcryptjs');
const saltRounds = 10;
const uusiSalasana = 'dollari';

bcrypt.hash(uusiSalasana, saltRounds, function(err, hash) {
    if (err) {
        console.error('Virhe hash-arvon luomisessa:', err);
        return;
    }

    // TÄMÄ ON SINUN UUSI TURVALLINEN HASH-ARVOSI
    console.log('-----------------------------------------------');
    console.log('Salasanan hash kopioitavaksi kantaan: \n', hash);
    console.log('-----------------------------------------------');
});