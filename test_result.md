#====================================================================================================
# START - Testing Protocol - DO NOT EDIT OR REMOVE THIS SECTION
#====================================================================================================

# THIS SECTION CONTAINS CRITICAL TESTING INSTRUCTIONS FOR BOTH AGENTS
# BOTH MAIN_AGENT AND TESTING_AGENT MUST PRESERVE THIS ENTIRE BLOCK

# Communication Protocol:
# If the `testing_agent` is available, main agent should delegate all testing tasks to it.
#
# You have access to a file called `test_result.md`. This file contains the complete testing state
# and history, and is the primary means of communication between main and the testing agent.
#
# Main and testing agents must follow this exact format to maintain testing data. 
# The testing data must be entered in yaml format Below is the data structure:
# 
## user_problem_statement: {problem_statement}
## backend:
##   - task: "Task name"
##     implemented: true
##     working: true  # or false or "NA"
##     file: "file_path.py"
##     stuck_count: 0
##     priority: "high"  # or "medium" or "low"
##     needs_retesting: false
##     status_history:
##         -working: true  # or false or "NA"
##         -agent: "main"  # or "testing" or "user"
##         -comment: "Detailed comment about status"
##
## frontend:
##   - task: "Task name"
##     implemented: true
##     working: true  # or false or "NA"
##     file: "file_path.js"
##     stuck_count: 0
##     priority: "high"  # or "medium" or "low"
##     needs_retesting: false
##     status_history:
##         -working: true  # or false or "NA"
##         -agent: "main"  # or "testing" or "user"
##         -comment: "Detailed comment about status"
##
## metadata:
##   created_by: "main_agent"
##   version: "1.0"
##   test_sequence: 0
##   run_ui: false
##
## test_plan:
##   current_focus:
##     - "Task name 1"
##     - "Task name 2"
##   stuck_tasks:
##     - "Task name with persistent issues"
##   test_all: false
##   test_priority: "high_first"  # or "sequential" or "stuck_first"
##
## agent_communication:
##     -agent: "main"  # or "testing" or "user"
##     -message: "Communication message between agents"

# Protocol Guidelines for Main agent
#
# 1. Update Test Result File Before Testing:
#    - Main agent must always update the `test_result.md` file before calling the testing agent
#    - Add implementation details to the status_history
#    - Set `needs_retesting` to true for tasks that need testing
#    - Update the `test_plan` section to guide testing priorities
#    - Add a message to `agent_communication` explaining what you've done
#
# 2. Incorporate User Feedback:
#    - When a user provides feedback that something is or isn't working, add this information to the relevant task's status_history
#    - Update the working status based on user feedback
#    - If a user reports an issue with a task that was marked as working, increment the stuck_count
#    - Whenever user reports issue in the app, if we have testing agent and task_result.md file so find the appropriate task for that and append in status_history of that task to contain the user concern and problem as well 
#
# 3. Track Stuck Tasks:
#    - Monitor which tasks have high stuck_count values or where you are fixing same issue again and again, analyze that when you read task_result.md
#    - For persistent issues, use websearch tool to find solutions
#    - Pay special attention to tasks in the stuck_tasks list
#    - When you fix an issue with a stuck task, don't reset the stuck_count until the testing agent confirms it's working
#
# 4. Provide Context to Testing Agent:
#    - When calling the testing agent, provide clear instructions about:
#      - Which tasks need testing (reference the test_plan)
#      - Any authentication details or configuration needed
#      - Specific test scenarios to focus on
#      - Any known issues or edge cases to verify
#
# 5. Call the testing agent with specific instructions referring to test_result.md
#
# IMPORTANT: Main agent must ALWAYS update test_result.md BEFORE calling the testing agent, as it relies on this file to understand what to test next.

#====================================================================================================
# END - Testing Protocol - DO NOT EDIT OR REMOVE THIS SECTION
#====================================================================================================



#====================================================================================================
# Testing Data - Main Agent and testing sub agent both should log testing data below this section
#====================================================================================================

user_problem_statement: "Create a modern, responsive portfolio website for B.Tech CSE student Sanu Kumar with Navbar, Hero, About, Skills, Projects (GitHub API), Resume download, Contact form, Footer sections"

backend:
  - task: "Health check endpoint"
    implemented: true
    working: true
    file: "app/api/[[...path]]/route.js"
    stuck_count: 0
    priority: "high"
    needs_retesting: false
    status_history:
      - working: "NA"
        agent: "main"
        comment: "GET /api/health - checks MongoDB connection"
      - working: true
        agent: "testing"
        comment: "✅ TESTED: GET /api/health returns status 'healthy' and database 'connected' correctly"

  - task: "GitHub repos fetch with caching"
    implemented: true
    working: true
    file: "app/api/[[...path]]/route.js"
    stuck_count: 0
    priority: "high"
    needs_retesting: false
    status_history:
      - working: "NA"
        agent: "main"
        comment: "GET /api/github - fetches repos from GitHub API with search API fallback and MongoDB cache"
      - working: true
        agent: "testing"
        comment: "✅ TESTED: GET /api/github?username=sanumaurya4u returns success:true with repos array containing all required fields (id, name, description, language, html_url, stars, forks). Found 2 repos with proper caching."
      - working: "NA"
        agent: "main"
        comment: "UPGRADED: profile+repos parallel fetch, TTL cache (5min), force-refresh via ?refresh=true, source indicator (live/cache/stale_cache), richer repo data (watchers, size, created_at, pushed_at)"
      - working: true
        agent: "testing"
        comment: "✅ UPGRADED API TESTED: All scenarios verified - Basic fetch returns success:true with repos array (id, name, description, language, html_url, stars, forks, watchers, size, created_at, updated_at, pushed_at, topics, fork) and profile object (avatar_url, name, public_repos, followers, following, html_url), source field (live/cache/stale_cache), cached_at timestamp. Force refresh (?refresh=true) returns source:'live'. Cache behavior working correctly. Found 2 repos with complete data structure."

  - task: "Contact form submission"
    implemented: true
    working: true
    file: "app/api/[[...path]]/route.js"
    stuck_count: 0
    priority: "high"
    needs_retesting: false
    status_history:
      - working: "NA"
        agent: "main"
        comment: "POST /api/contact - saves contact form messages to MongoDB with validation"
      - working: true
        agent: "testing"
        comment: "✅ TESTED: POST /api/contact works correctly - accepts valid data (returns 201), rejects missing fields (400), rejects invalid email (400). All validation working properly."

  - task: "Get contact messages"
    implemented: true
    working: true
    file: "app/api/[[...path]]/route.js"
    stuck_count: 0
    priority: "medium"
    needs_retesting: false
    status_history:
      - working: "NA"
        agent: "main"
        comment: "GET /api/contact - retrieves all contact messages from MongoDB"
      - working: true
        agent: "testing"
        comment: "✅ TESTED: GET /api/contact returns success:true with messages array. Successfully retrieved contact messages including the test message submitted."

frontend:
  - task: "Portfolio website with all sections"
    implemented: true
    working: "NA"
    file: "app/page.js"
    stuck_count: 0
    priority: "high"
    needs_retesting: true
    status_history:
      - working: "NA"
        agent: "main"
        comment: "Complete portfolio with Navbar, Hero, About, Skills, Projects, Resume, Contact, Footer sections"

metadata:
  created_by: "main_agent"
  version: "1.0"
  test_sequence: 1
  run_ui: false

test_plan:
  current_focus:
    - "Portfolio website with all sections"
  stuck_tasks: []
  test_all: false
  test_priority: "high_first"

agent_communication:
  - agent: "main"
    message: "All backend endpoints implemented. Please test: 1) GET /api/health 2) GET /api/github?username=sanumaurya4u (repos are cached in MongoDB) 3) POST /api/contact with {name, email, message} 4) GET /api/contact. Base URL: https://cse-portfolio-39.preview.emergentagent.com"
  - agent: "testing"
    message: "✅ BACKEND TESTING COMPLETE: All 5 API endpoints tested successfully. Health check working, GitHub repos API with caching functional (2 repos found), contact form submission with proper validation working, contact messages retrieval working, API root endpoint working. All tests passed 5/5. Backend is fully functional."
  - agent: "testing"
    message: "✅ UPGRADED GITHUB API TESTING COMPLETE: Tested all scenarios from review request. Basic fetch (/api/github?username=sanumaurya4u) returns success:true with complete repos array (id, name, description, language, html_url, stars, forks, watchers, size, created_at, updated_at, pushed_at, topics, fork) and profile object (avatar_url, name, public_repos, followers, following, html_url), plus source field and cached_at timestamp. Force refresh (?refresh=true) correctly returns source:'live'. Cache behavior working - second call returns source:'cache'. All existing endpoints (health, contact) still working. All 7/7 tests passed."