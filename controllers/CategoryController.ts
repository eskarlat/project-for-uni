import Book from '../models/Book';
import Category from '../models/Category';

export function index(req, res, next) {
    Category.find()
        .then(categories => {
            res.render('category/index', {categories});
        })
        .catch(error => {
            res.render('error', { error });
        })
}

export function edit(req, res, next) {
    const id = req.params.id;

    Category.findById(id)
        .then(category => {
            res.render('category/edit', { category });
        })
        .catch(error => {
            res.render('error', { error });
        })
}

export function create(req, res, next) {
    res.render('category/create');
}

export function store(req, res, next) {
    let body = {
        title: req.body.title,
    };

    let category = new Category(body);

    category.save()
        .then(result => {
            res.redirect('/admin/categories');
        })
        .catch(error => {
            res.render('error', { error });
        })
}

export function update(req, res, next) {
    const id = req.params.id;

    let body = {
        title: req.body.title,
    };

    Category.findById(id)
        .then(category => {
            category.update(body, () => {
                res.redirect('/admin/categories');
            });
        })
        .catch(error => {
            res.render('error', { error });
        })
}

export function destroy (req, res, next) {
    const id = req.params.id;

    Category.findById(id)
        .then(category => {
            category.remove();
            res.redirect('/admin/categories');
        })
        .catch(error => {
            res.render('error', { error })
        })
}

export function search (req, res, next) {
    const categoryId = req.query.cat;

    Book.findByCategory(categoryId)
        .then(books => {
            Category.findById(categoryId)
                .then(category => {
                    res.render('book/categorySearch', {books, category});
                })
        })
        .catch(error => {
            res.render('error', { error })
        })
}