import PropTypes from 'prop-types';

const NavBar = ({data}) => {
    if (!data) {
        return null; // or handle this case accordingly
    }
    return (
      <nav style={styles.nav}>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <b>{data.followers}</b><br />Followers
          </li>
          <li style={styles.li}>
            <b>{data.following}</b><br />Following
          </li>
          <li style={styles.li}>
            <b>{data.bio}</b><br />Photos
          </li>
        </ul>
      </nav>
    );
  };
  
  const styles = {
    nav: {
        
        borderTop: '3px solid #ccc', // Add a border at the bottom for the line
        paddingBottom: '10px', // Adjust as needed for spacing
    },
    ul: {
      listStyle: 'none', // Change from 'list-style' to 'listStyle'
      display: 'flex',
      justifyContent: 'space-around',
    },
    
    li: {
      marginRight: '30px', // Change from 'margin-right' to 'marginRight'
    },
  };
  
  NavBar.propTypes = {
    data: PropTypes.object
  }
  export default NavBar;