import React, { useEffect, useState } from 'react';
import { Box, IconButton } from '@mui/material'
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LinearProgress from '@mui/material/LinearProgress';
import { ThreeDots } from 'react-loader-spinner';
import '../styles/News.css'

import axios from 'axios'



export default function News() {

    const [ndata, setndata] = useState(null)
    const [Loader, setLoader] = useState(true)
    const [bookmarkIcon, setbookmarkIcon] = useState([])
    let bookmarkStaus = "Bookmark added successfully"

    const notify = (text) => toast.success(text, {
        position: "top-right",
        autoClose: 1900,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "colored",
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=c692d694a23b43b9bac3750851c4d78c`);
                const data = await response.json();
                console.log(data);
                setndata(data)
                setbookmarkIcon(Array(data.articles.length).fill(false));
                 setLoader(false)


            } catch (error) {
                console.error('Error:', error);
                return error
            }
        };

        fetchData();
    }, []);


    const addBookmark = async (element) => {
        const id = localStorage.getItem('user')

        try {
            const { data } = await axios.post(`http://localhost:5000/userBookmarks/${id}`, element)
            if (data.success) {
                console.log(data.message)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const delBookmark = async (element) => {
        const id = localStorage.getItem('user')
        try {
            const { data } = await axios.post(`http://localhost:5000/removeBookmarks/${id}`, element)
            if (data.success) {
                console.log("it is working")
                console.log(data.message)
            }
        } catch (error) {
            console.log(error)
        }

    }


    const bookmarkSave = (index, ele) => {
        const newBookmarkIcon = [...bookmarkIcon];
        newBookmarkIcon[index] = !newBookmarkIcon[index];
        console.log(newBookmarkIcon[index])
        if (newBookmarkIcon[index]) { bookmarkStaus = "Bookmark added successfully"; addBookmark(ele) }
        else { bookmarkStaus = "bookmark removed successfully"; delBookmark(ele) }
        notify(bookmarkStaus)
        setbookmarkIcon(newBookmarkIcon);


    }

    return (
        <>
            <form class="d-flex" role="search" id='searchBox'>
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
            <ToastContainer />

            <div class="newsC ">
                {Loader ? <ThreeDots
                    height="80"
                    width="80"
                    radius="9"
                    color="#4fa94d"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClassName=""
                    visible={true}
                /> : (
                     ndata.articles.map((ele, index) => {
                        return <div class="newsboxC" key={index} id={`news${index}`}>

                            <div class="imageC" style={{ backgroundImage: ele.urlToImage ? `url(${ele.urlToImage})` : `url('https://img.freepik.com/free-photo/eye-mythological-dragon-fire-generative-ai_188544-12557.jpg?w=2000')` }}>
                            </div>
                            <div class="newspara">
                                {ele.title.split(/\s+/).slice(0, 10).join(" ")}
                                <a className='newslink' href={ele.url}>...more</a>
                                <div className="menuC">
                                    <div className="menu">
                                        <Box><IconButton onClick={() => { bookmarkSave(index, ele) }}>{!bookmarkIcon[index] ? <BookmarkAddIcon /> : <><BookmarkAddedIcon /></>}</IconButton></Box>
</div>

                                </div>
                            </div>

                        </div>

                    })
                    )}
            </div>
           
        </>
    );
}
