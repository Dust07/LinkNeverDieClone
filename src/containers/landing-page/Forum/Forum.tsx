import React from 'react'
import "./style.scss";
import "./responsive.scss"
import { forumPosts } from "../../../mockData/mockdata"

function Forum() {
    return (
        <div className="forum-wrapper">
            <div className="forum-title">
                <h1>Diễn đàn - Hỏi đáp</h1>
            </div>
            <div className="forum-posts-wrapper">
                {forumPosts.map((post, index) => {
                    const { title, user, category, viewCount, answerCount } = post;
                    return (
                        <div key={index} className="forum-post">
                            <h3>{title}</h3>
                            <div className="forum-post-user">
                                <img src={require(`../../../assets/mock_user_avatar/${user.avatar}`)} alt={user.id} />
                                <p>{user.id}</p>
                            </div>
                            <div className="forum-post-category">{category}</div>
                            <div className="forum-post-count">
                                <div className="forum-post-count-item">
                                    <p>{viewCount}</p>lượt xem</div>
                                <div className="forum-post-count-item">
                                    <p>{answerCount}</p>trả lời
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div >
    )
}

export default Forum