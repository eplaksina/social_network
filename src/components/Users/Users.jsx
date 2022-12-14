import React from "react";
import styles from './Users.module.css'
import axios from 'axios'

class Users extends React.Component {
  constructor(props) {
    super(props);

    axios
      .get('https://social-network.samuraijs.com/api/1.0/users')
      .then(response => {
        this.props.setUsers(response.data.items)
      })
  }

  render() {
    return (
      <>
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