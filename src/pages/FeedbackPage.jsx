import React from "react";
import { useSelector } from "react-redux";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const FeedbackTable = () => {
  const feedbacksObj = useSelector((state) => state.feedback.feedbacks) || [];
  const feedbacks = Object.values(feedbacksObj).flat();  
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Rating</TableCell>
            <TableCell>Feedback</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {feedbacks.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id.toFixed(2)}</TableCell>
              <TableCell>{row.value}</TableCell>
              <TableCell>{row.feedback}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default FeedbackTable;
