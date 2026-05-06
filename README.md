# Notification System Design

## Architecture Overview
This app utilizes a **Modular Frontend Architecture** with a decoupled **Logging Middleware**. 

### Logging Strategy
- **Centralized Logic**: All logs are funneled through the `logging_middleware` package. 
- **Contextual Metadata**: Every log call requires a `package` identifier (e.g., `api`, `component`) to allow for better filtering in the dashboard.
- **Async Non-Blocking**: Logs are dispatched via `fetch` but do not block the UI thread, ensuring a smooth user experience.

### State Management
- We use a **Custom Hook Pattern** (`useNotificationStore`) to manage local state. This provides a clean separation between UI components and data logic while logging every state transition.

### UI/UX
- **Responsive Grid**: Uses MUI Grid (`xs=12`, `md=5`) to shift from a stacked layout on mobile to a side-by-side layout on desktop.
- **Feedback**: Loading spinners and Success/Error logs provide clear user feedback.
