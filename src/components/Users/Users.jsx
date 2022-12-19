import React from "react";
import styles from './Users.module.css'
import axios from 'axios'

class Users extends React.Component {

  /*  componentDidMount() {
     axios
       .get('https://social-network.samuraijs.com/api/1.0/users')
       .then(response => {
         this.props.setUsers(response.data.items)
       })
   }
  */
  render() {
    debugger
    let pagesCount = this.props.totalUsersCount / this.props.pageSize
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)
    }

    return (
      <>
        <div>
          {console.log(pages)}
          {pages.map(p => {
            console.log(p)
            console.log(this.props.currentPage)
            return <span className={this.props.currentPage === p && styles.selected_page}>{p}</span>
          })}

         {/*  <span className={styles.selected_page}>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span> */}
        </div>
        <div>
          {
            this.props.users.map(u => <div key={u.id}>
              <div className={styles.row}>
                <div className={styles.avatar}>
                  <img src={u.photos.small != null ? u.photos.small : 'no-product.jpg'} alt="" />
                  <div>
                    {u.followed ?
                      <button onClick={() => { this.props.unfollow(u.id) }}>
                        Unfollow
                      </button>
                      :
                      <button onClick={() => { this.props.follow(u.id) }}>
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
                    <div>
                      {/*                     {u.location.city}, <br /> {u.location.country}
*/}                  </div>
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

}
export default Users;