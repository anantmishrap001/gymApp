import React from "react";
import { Box, Container, Typography, Paper } from "@mui/material";
import ExercisePage from "../components/ExerciseDB";
import Footer from "../components/Footer";

const Workouts = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          background: "linear-gradient(to right, #4e73df, #1d5db9)", // Gradient background for the page
        }}
      >
        <Container maxWidth="lg">
          <Paper
            sx={{
              padding: 4,
              borderRadius: 3,
              boxShadow: 6,
              backgroundColor: "rgba(255, 255, 255, 0.9)", // White background with slight transparency
              textAlign: "center",
            }}
          >
            <Typography
              variant="h3"
              component="h1"
              sx={{
                fontWeight: "bold",
                marginBottom: 4,
                color: "#2c3e50", // Darker text for better contrast
              }}
            >
              Workout Database
            </Typography>

            <Typography
              variant="body1"
              sx={{
                marginBottom: 4,
                color: "#34495e", // Subtle color for the description
              }}
            >
              Explore various exercises tailored to your fitness goals. Whether you're looking to build strength, increase flexibility, or improve endurance, find the perfect workout here.
            </Typography>

            <ExercisePage />
          </Paper>
        </Container>
      </Box>

      <Footer />
    </>
  );
};

export default Workouts;
