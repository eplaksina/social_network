import styles from './Users.module.css'
import React from "react";
import { NavLink } from 'react-router-dom';
import { follow } from '../../redux/users-reducer';

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
                    <button onClick={() => {
                      follow.deleteFollow(u.id)
                        .then(data => {
                          if (data.resultCode === 0) {
                            props.unfollow(u.id)
                          }
                        })

                    }}>
                      Unfollow
                    </button>
                    :
                    <button onClick={() => {
                      follow.postFollow(u.id)
                        .then(data => {
                          if (data.resultCode === 0) {
                            props.follow(u.id)
                          }
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