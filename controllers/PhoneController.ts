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
    let phone = new Phone(req.body);

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

    const body = req.body;

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