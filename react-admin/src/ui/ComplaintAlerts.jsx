import { useEffect } from "react";
import { startComplaintAlerts } from "../lib/alerts.js";
import { useToast } from "./Toast.jsx";

/* Sits in the app (inside the login guard) and sends a Telegram alert
   whenever a new complaint arrives while the panel is open. */
export default function ComplaintAlerts() {
  const toast = useToast();

  useEffect(() => {
    const unsub = startComplaintAlerts((rec) => {
      const who = (rec && rec.data && rec.data.userName) || "New complaint";
      toast("Telegram alert sent: " + who);
    });

    return () => unsub && unsub();
  }, [toast]);

  return null;
}
