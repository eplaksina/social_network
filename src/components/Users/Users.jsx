import styles from './Users.module.css'
import React from "react";
import { NavLink } from 'react-router-dom';
import axios from 'axios';

let Users = (props) => {
  let pagesCount = props.totalUsersCount / props.pageSize
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return (
    <>
      <div>
        {pages.map(p => {
          return <span className={props.currentPage === p && styles.selected_page} onClick={(e) => { props.onPageChanges(p); }}>{p}</span>
        })}
      </div>
      <div>
        {
          props.users.map(u => <div key={u.id}>
            <div className={styles.row}>
              <div className={styles.avatar}>
                <NavLink to={'/profile/' + u.id}>
                  <img src={u.photos.small != null ? u.photos.small : 'no-product.jpg'} alt="" />
                </NavLink>
                <div>
                  {u.followed ?
                    <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                      props.toggleFollowingProgress(true, u.id);
                      axios
                        .delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                          withCredentials: true
                        })
                        .then(response => {
                          if (response.data.resultCode === 0) {
                            props.unfollow(u.id)
                          }
                          props.toggleFollowingProgress(false, u.id);
                        })

                    }}>
                      Unfollow
                    </button>
                    :
                    <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                      props.toggleFollowingProgress(true, u.id);

                      axios
                        .post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                          withCredentials: true
                        })
                        .then(response => {
                          if (response.data.resultCode === 0) {
                            props.follow(u.id)
                          }
                          props.toggleFollowingProgress(false, u.id);
                        })

                    }}>
                      Follow
                    </button>
                  }
                </div>
              </div>
              <div className={styles.item_discription}>
                <div className={styles.row}>
                  <div className={styles.name}>
                    {u.name}
                  </div>
                </div>
                <div>
                  {u.status}
                </div>
              </div>
            </div>
          </div>)
        }
      </div>
    </>
  )
}

export default Users;