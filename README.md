# Rest-Rant-Project


REST-Rant is an app where users can review restaurants.
| Method | Path | Purpose |
| ------ | ---- | ------- |
| Get | / | Homepage |
| Get | /places | List all Places |
| Post | /places | Create new place |
| Get | /places/new| From page for creatin a new place |
| Get | /places/:id | Details about a particular place |
| Put | /places/:id | Update a particular place |
| Get | /places/:id/edit | Form page for editing an existing place |
| Delete | /places/:id | Delete a particular place |
| Post | /places/:id/rant | Create a rant (comment) about a particular place |
| Delete | /places/:id/rant/:rantId | Delete a rant (comment) about a particular place |
| Get | * | 404 page (matches any route not defined above) |

--- 

1. As a dev, I need to request data 
from the server about a specific place,
so I can populate the places detail Page






