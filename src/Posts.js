import React, {useState, useEffect} from 'react';


export default function Posts({arrUsers, active, company}) {
    const [post, setPost] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPost(data));
    }, []);

    let blogs = [];

    for (const user of arrUsers) {
        if (user.id === active.id){
            blogs = user.blog;
        }
    }

    let res = blogs.map((blog, index) => {
        return <div key={index}>
            {post && <>
                <h3 className={'posts__subtitle'}>{post[blog].title}</h3>
                <p className={'posts__text'}>{post[blog].body}</p>
            </>}
        </div>;
    });

    return <div className={'posts'}>
        <div className={'posts__main'}>
            <h2 className={'posts__title'}>3 актуальных поста {company}</h2>
            {res}
        </div>
    </div>;
}
