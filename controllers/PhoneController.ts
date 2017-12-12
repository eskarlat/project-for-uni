import * as fs from 'fs';
import Phone from '../models/Phone';

export function edit(req, res, next) {
    const id = req.params.id;

    Phone.findById(id)
        .then(phone => {
            res.render('edit', { phone });
        })
        .catch(error => {
            res.render('error', { error });
        })
}

export function create(req, res, next) {
    res.render('create');
}

export function store(req, res, next) {
    let body = {
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
    };

    let phone = new Phone(body);

    phone.image.data = fs.readFileSync(req.file.path, 'base64');
    phone.image.contentType = 'image/jpeg';

    phone.save()
        .then(result => {
            res.redirect('/admin');
        })
        .catch(error => {
            res.render('error', { error })
        })
}

export function update(req, res, next) {
    const id = req.params.id;

    let body = {
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        image: {
            data: fs.readFileSync(req.file.path, 'base64'),
            contentType: 'image/jpeg'
        }
    };

    Phone.findById(id)
        .then(phone => {
            phone.update(body, (err, phone) => {
                res.redirect('/admin');
            });
        })
        .catch(error => {
            res.render('error', { error });
        })
}

export function destroy (req, res, next) {
    const id = req.params.id;

    Phone.findById(id)
        .then(phone => {
            phone.remove();
            res.redirect('/admin');
        })
        .catch(error => {
            res.render('error', { error })
        })
}