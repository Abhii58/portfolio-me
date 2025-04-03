import ProjectCard from './ProjectCard';
import RevealAnimation from './RevealAnimation';

const Projects = () => {
  const projects = [
    {
      title: "Instagram Auto-Reply Bot",
      description: "Automated comment response system using Instagram API and MongoDB",
      image: "",
      tags: ["Python", "FastAPI", "MongoDB", "Instagram API", "Automation"],
      demoLink: "#",
      repoLink: "#",
      details: [
        "Built automated bot handling Instagram comments with keyword-based responses",
        "Integrated FastAPI for secure authentication and MongoDB for data storage",
        "Implemented duplicate detection system to prevent redundant replies",
        "Developed scalable architecture supporting multiple accounts simultaneously"
      ]
    },
    {
      title: "Sales Dashboard – Tableau",
      description: "Interactive dashboard for revenue and sales trend analysis.",
      image: "",
      tags: ["Tableau", "Excel", "SQL", "Data Visualization"],
      demoLink: "#",
      details: [
        "Created an interactive dashboard for revenue and sales trend analysis.",
        "Integrated multi-source data (Excel, SQL) and implemented KPI tracking.",
        "Designed intuitive filters and drill-down capabilities for deeper analysis.",
        "Implemented automated data refresh schedules for real-time reporting."
      ]
    },
    {
      title: "Ferns and Petals Sales Analysis",
      description: "Data cleaning and analysis of floral retailer sales data with Excel dashboards.",
      image: "",
      tags: ["Python", "Pandas", "NumPy", "Excel", "Data Cleaning"],
      demoLink: "#",
      repoLink: "#",
      details: [
        "Processed and cleaned large datasets using Python (Pandas, NumPy).",
        "Built an Excel dashboard with Pivot Tables and Charts for executive reporting.",
        "Identified key sales trends and seasonal patterns in the floral retail business.",
        "Implemented data validation rules to ensure data quality and consistency."
      ]
    },
    {
      title: "Stock Price Prediction",
      description: "Machine learning models to forecast stock prices using historical data and technical indicators.",
      image: "",
      tags: ["Python", "LSTM", "Random Forest", "Machine Learning", "Finance"],
      repoLink: "#",
      details: [
        "Built an LSTM and Random Forest model to forecast stock prices.",
        "Integrated real-time data retrieval via APIs and visualized predictions.",
        "Implemented technical indicators (RSI, MACD, Bollinger Bands) as features.",
        "Achieved 85% directional accuracy in short-term price movement prediction."
      ]
    },
    {
      title: "Customer Segmentation Analysis",
      description: "Clustering analysis to identify distinct customer segments for targeted marketing.",
      image: "",
      tags: ["Python", "K-Means", "Scikit-learn", "Power BI"],
      repoLink: "#",
      details: [
        "Performed RFM (Recency, Frequency, Monetary) analysis on customer transaction data.",
        "Used K-means clustering to identify 5 distinct customer segments.",
        "Created Power BI visualizations to communicate segment characteristics.",
        "Provided actionable marketing recommendations based on segment insights."
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <RevealAnimation>
            <h2 className="section-title">Recent Projects</h2>
          </RevealAnimation>
          <RevealAnimation delay={100}>
            <p className="section-subtitle mx-auto">
              Here are some selected projects that showcase my skills and experience in data analysis and visualization.
            </p>
          </RevealAnimation>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <RevealAnimation 
              key={index} 
              direction="up" 
              delay={index * 100}
            >
              <ProjectCard {...project} />
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
