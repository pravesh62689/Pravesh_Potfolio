import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import "../styles/skillsSection.css"

const useStyles = makeStyles((theme) => ({
    skillsSection: {
        backgroundColor: '#282C30',
        color: '#ffffff',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        maxWidth: "100%",
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        overflow: 'content',
        padding:"4% 8% 4% 8%"
    },
    skillsTitle: {
        marginBottom: theme.spacing(3),
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif',
        fontWeight: 700,
        letterSpacing: 1,
    },
    skillsContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        height: '100%',
    },
    skillGroup: {
        flexBasis: '40%',
        marginBottom: theme.spacing(4),
    },
    skillItem: {
        marginBottom: theme.spacing(2),
    },
    skillName: {
        fontSize: 16,
        fontFamily: 'Arial, sans-serif',
        fontWeight: 600,
        marginBottom: theme.spacing(1),
        color: "#fff",
    },
    progressBar: {
        width: '100%',
        borderRadius: 10,
        height: 10,
        marginBottom: theme.spacing(1),
    },
    progressValue: {
        textAlign: 'right',
        fontWeight: 600,
        color:"#fff",
        fontFamily: 'Arial, sans-serif',
        marginLeft: theme.spacing(1),
    },
    circularProgressContainer: {
        position: 'relative',
        display: 'inline-flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        margin: theme.spacing(4),
        borderRadius: '50%',
        padding: theme.spacing(3),
    },
    circularProgressText: {
        position: 'absolute',
        top: '-1.9rem',
        fontFamily: 'Arial, sans-serif',
        fontWeight: 600,
        color: '#fff',
        zIndex: 1,
    },
    circularProgressPercentage: {
        position: 'absolute',
        fontFamily: 'Arial, sans-serif',
        fontWeight: 600,
        color: '#fff',
        fontSize: 20,
        zIndex: 1,
    },
    backgroundCircularProgress: {
        color: 'rgb(182, 188, 226)',
    },
    circularProgress: {
        boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.5)',
        borderRadius: "60px",
        color: theme.palette.primary.main,
        position: 'absolute',
        
    },
}));

const SkillsSection = () => {
    const classes = useStyles();
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '40%',
            threshold: 0.3
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setInView(true);
                }
            });
        }, options);

        observer.observe(document.querySelector('.skills-section'));

        return () => observer.disconnect();
    }, []);

    const technicalSkills = [
        { name: 'HTML/CSS', progress: 90 },
        { name: 'JavaScript', progress: 85 },
        { name: 'React', progress: 80 },
        { name: 'Node.js', progress: 75 },
        { name: 'Express', progress: 70 },
        { name: 'MongoDB', progress: 65 },
        { name: 'AWS', progress: 60 },
        { name: 'Git', progress: 55 },
    ];

    const professionalSkills = [
        { name: 'Communication', progress: 80 },
        { name: 'Creativity', progress: 75 },
        { name: 'Team Work', progress: 70 },
        { name: 'Problem Solving', progress: 65 },
        { name: 'Time Management', progress: 60 },
        { name: 'Leadership', progress: 55 },
    ];

    return (
        <div className="skills-section">
            <section className={classes.skillsSection}>
                <Typography variant="h4" className={classes.skillsTitle}>
                    My Skills
                </Typography>
                <Box className={classes.skillsContainer}>
                    <Box className={classes.skillGroup}>
                        <Typography variant="h5" className={classes.skillsTitle}>
                            Technical Skills
                        </Typography>
                        {technicalSkills.map((skill, index) => (
                            <Box key={index} className={classes.skillItem}>
                                <Typography className={classes.skillName}>{skill.name}</Typography>
                                <LinearProgress
                                    variant="determinate"
                                    value={inView ? skill.progress : 0}
                                    className={classes.progressBar}
                                    style={{ '--progress': `${inView ? skill.progress : 0}%` }}
                                />
                                <Typography className={classes.progressValue}>
                                    {inView ? `${skill.progress}%` : '0%'}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                    <Box className={classes.skillGroup}>
                        <Typography variant="h5" className={classes.skillsTitle}>
                            Professional Skills
                        </Typography>
                        {professionalSkills.map((skill, index) => (
                            <Box key={index} className={classes.circularProgressContainer}>
                                <Typography className={classes.circularProgressText}>{skill.name}</Typography>
                                <CircularProgress
                                    variant="determinate"
                                    value={100}
                                    size={120}
                                    thickness={6}
                                    className={classes.backgroundCircularProgress}
                                />
                                <CircularProgress
                                    variant="determinate"
                                    value={inView ? skill.progress : 0}
                                    size={122}
                                    thickness={6}
                                    className={classes.circularProgress}
                                    style={{ '--progress': `${inView ? skill.progress : 0}%` }}
                                />
                                <Typography className={classes.circularProgressPercentage}>
                                    {inView ? `${skill.progress}%` : '0%'}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </section>
        </div>
    );
};

export default SkillsSection;

