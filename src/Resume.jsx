import React from "react";
import {
  PDFDownloadLink,
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";

// Define styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    padding: 30,
  },
  section: {
    marginBottom: 10,
  },
  heading: {
    fontSize: 20,
    marginBottom: 10,
  },
});

// Component for rendering the resume
export const Resume = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.heading}>John Doe</Text>
        <Text>Address: 123 Main Street, City, State, Zip</Text>
        <Text>Email: john.doe@example.com</Text>
        <Text>Phone: (555) 123-4567</Text>
      </View>
      {/* Add more sections for experience, education, etc. */}
    </Page>
  </Document>
);



// Component for rendering the PDF and download button
export const ResumeWithDownload = () => (
  <div>
    <PDFDownloadLink document={<Resume />} fileName="resume.pdf">
      {({ blob, url, loading, error }) =>
        loading ? "Loading document..." : "Download now!"
      }
    </PDFDownloadLink>
  </div>
);

