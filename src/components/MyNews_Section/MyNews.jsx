import React from 'react'
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { Box, IconButton } from '@mui/material'
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import { success } from '../../Utils/toasts';


// import '../styles/MyNews.css'      

export default function MyNews() {
    const [myNews, setmyNews] = useState([])



    // const notify = (text) => toast.success(text, {
    //     position: "top-right",
    //     autoClose: 1900,
    //     hideProgressBar: true,
    //     closeOnClick: false,
    //     pauseOnHover: false, 
    //     draggable: false,
    //     progress: undefined,
    //     theme: "colored",
    // });

    useEffect(() => {
        getMyBookmarks()
    }, [])
    const getMyBookmarks = async () => {
        const id = localStorage.getItem('user')

        try {

            const { data } = await axios.post(`http://localhost:5000/getBookmarks/${id}`)
            console.log("hello")
            console.log(data)
            if (data.success) {
                setmyNews(data.bookmarks)
                console.log(data.bookmarks)
            }
        } catch (error) {
            console.log("the err ___", error)
        }

    }



    const removeSavedBookmark = async (element) => {
        const id = localStorage.getItem('user')
        console.log(element)
        try {
            const { data } = await axios.post(`http://localhost:5000/removeBookmarks/${id}`, { publishedAt: element?.publishedAt })
            if (data.success) {
                // console.log(data.message)
                getMyBookmarks()
                // setmyNews(data.user.bookmarks)
                success("bookmark removed successfully")
            }
        } catch (error) {
            console.log(error)
        }

    }

    console.log(myNews, 'myNews')
    return (
        <>
            <div className="newsC">
                <ToastContainer />
                {myNews.length !== 0 ? (myNews.map((ele, index) => {
                    return <div class="newsboxC" key={index} id={`news${index}`}>

                        <div class="imageC" style={{ backgroundImage: ele.urlToImage ? `url(${ele.urlToImage})` : `url('https://img.freepik.com/free-photo/eye-mythological-dragon-fire-generative-ai_188544-12557.jpg?w=2000')` }}>
                        </div>
                        <div class="newspara">
                            {ele?.title?.split(/\s+/).slice(0, 10).join(" ")}
                            <a className='newslink' href={ele.url}>...more</a>
                            <div className="menuC">
                                <div className="menu">
                                    <Box><IconButton onClick={() => { removeSavedBookmark(ele) }}><BookmarkAddedIcon /></IconButton></Box>
                                </div>

                            </div>
                        </div>

                    </div>
                })) : (<>

                    <div className="myNewsBox">
                        <h1>No Bookmarks added</h1>
                        <span style={{ color: "black" }}><NavLink id='addNews' to='/newsapi'>Add some... </NavLink>of the news of your interest</span>
                    </div>


                </>)
                }
            </div>


        </>
    )
}
