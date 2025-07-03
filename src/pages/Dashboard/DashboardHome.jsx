import "../../assets/sass/dashboard.scss";
const DashboardHome = () => {
  return (
    <div>
      <h2>Welcome to Your Coffee Shop Dashboard!</h2>
      <p>Use the sidebar to navigate through blog posts, categories, and other settings.</p>
      {/* You can add some summary statistics here */}
      <div style={{marginTop: '30px', padding: '20px', border: '1px solid #eee', borderRadius: '8px'}}>
        <h3>Quick Stats:</h3>
        <p>Total Blog Posts: <strong>15</strong></p>
        <p>Total Categories: <strong>5</strong></p>
        {/* Placeholder for real data */}
      </div>
    </div>
  );
};

export default DashboardHome;