#!/usr/bin/env python3
"""
Backend API Testing Script for Portfolio Website
Tests all API endpoints according to the review request specifications.
"""

import requests
import json
import sys
from datetime import datetime

# Base URL from environment
BASE_URL = "https://cse-portfolio-39.preview.emergentagent.com"

def print_test_result(test_name, success, details=""):
    """Print formatted test results"""
    status = "✅ PASS" if success else "❌ FAIL"
    print(f"{status} {test_name}")
    if details:
        print(f"   Details: {details}")
    print()

def test_health_endpoint():
    """Test GET /api/health endpoint"""
    print("🔍 Testing Health Check Endpoint...")
    try:
        response = requests.get(f"{BASE_URL}/api/health", timeout=10)
        
        if response.status_code == 200:
            data = response.json()
            if data.get("status") == "healthy" and data.get("database") == "connected":
                print_test_result("Health Check", True, f"Status: {data.get('status')}, Database: {data.get('database')}")
                return True
            else:
                print_test_result("Health Check", False, f"Unexpected response: {data}")
                return False
        else:
            print_test_result("Health Check", False, f"HTTP {response.status_code}: {response.text}")
            return False
            
    except Exception as e:
        print_test_result("Health Check", False, f"Request failed: {str(e)}")
        return False

def test_github_basic_fetch():
    """Test GET /api/github?username=sanumaurya4u - Basic fetch scenario"""
    print("🔍 Testing GitHub Basic Fetch...")
    try:
        response = requests.get(f"{BASE_URL}/api/github?username=sanumaurya4u", timeout=15)
        
        if response.status_code == 200:
            data = response.json()
            
            # Check basic structure
            if not data.get("success"):
                print_test_result("GitHub Basic Fetch", False, f"success=false: {data}")
                return False
            
            # Check repos array
            if "repos" not in data:
                print_test_result("GitHub Basic Fetch", False, "Missing 'repos' field")
                return False
                
            repos = data["repos"]
            if not isinstance(repos, list):
                print_test_result("GitHub Basic Fetch", False, "repos is not an array")
                return False
            
            if len(repos) == 0:
                print_test_result("GitHub Basic Fetch", False, "No repos found")
                return False
            
            # Check required repo fields
            first_repo = repos[0]
            required_repo_fields = ["id", "name", "description", "language", "html_url", "stars", "forks", "watchers", "size", "created_at", "updated_at", "pushed_at", "topics", "fork"]
            missing_repo_fields = [field for field in required_repo_fields if field not in first_repo]
            
            if missing_repo_fields:
                print_test_result("GitHub Basic Fetch", False, f"Missing repo fields: {missing_repo_fields}")
                return False
            
            # Check profile object
            if "profile" not in data:
                print_test_result("GitHub Basic Fetch", False, "Missing 'profile' field")
                return False
                
            profile = data["profile"]
            if profile is not None:  # profile can be null
                required_profile_fields = ["avatar_url", "name", "public_repos", "followers", "following", "html_url"]
                missing_profile_fields = [field for field in required_profile_fields if field not in profile]
                
                if missing_profile_fields:
                    print_test_result("GitHub Basic Fetch", False, f"Missing profile fields: {missing_profile_fields}")
                    return False
            
            # Check source field
            if "source" not in data:
                print_test_result("GitHub Basic Fetch", False, "Missing 'source' field")
                return False
                
            source = data["source"]
            if source not in ["live", "cache", "stale_cache"]:
                print_test_result("GitHub Basic Fetch", False, f"Invalid source value: {source}")
                return False
            
            # Check cached_at timestamp
            if "cached_at" not in data:
                print_test_result("GitHub Basic Fetch", False, "Missing 'cached_at' field")
                return False
            
            print_test_result("GitHub Basic Fetch", True, f"Found {len(repos)} repos, source: {source}, profile: {'present' if profile else 'null'}")
            return True
            
        else:
            print_test_result("GitHub Basic Fetch", False, f"HTTP {response.status_code}: {response.text}")
            return False
            
    except Exception as e:
        print_test_result("GitHub Basic Fetch", False, f"Request failed: {str(e)}")
        return False

def test_github_force_refresh():
    """Test GET /api/github?username=sanumaurya4u&refresh=true - Force refresh scenario"""
    print("🔍 Testing GitHub Force Refresh...")
    try:
        response = requests.get(f"{BASE_URL}/api/github?username=sanumaurya4u&refresh=true", timeout=15)
        
        if response.status_code == 200:
            data = response.json()
            
            if not data.get("success"):
                print_test_result("GitHub Force Refresh", False, f"success=false: {data}")
                return False
            
            # Should return source: 'live' when force refreshed
            source = data.get("source")
            if source != "live":
                print_test_result("GitHub Force Refresh", False, f"Expected source='live', got '{source}'")
                return False
            
            # Profile should be populated
            profile = data.get("profile")
            if profile is None:
                print_test_result("GitHub Force Refresh", False, "Profile should be populated on force refresh")
                return False
            
            print_test_result("GitHub Force Refresh", True, f"Force refresh successful, source: {source}")
            return True
            
        else:
            print_test_result("GitHub Force Refresh", False, f"HTTP {response.status_code}: {response.text}")
            return False
            
    except Exception as e:
        print_test_result("GitHub Force Refresh", False, f"Request failed: {str(e)}")
        return False

def test_github_cache_behavior():
    """Test cache behavior by calling the basic endpoint twice quickly"""
    print("🔍 Testing GitHub Cache Behavior...")
    try:
        # First call
        response1 = requests.get(f"{BASE_URL}/api/github?username=sanumaurya4u", timeout=15)
        
        if response1.status_code != 200:
            print_test_result("GitHub Cache Behavior", False, f"First call failed: HTTP {response1.status_code}")
            return False
        
        data1 = response1.json()
        source1 = data1.get("source")
        
        # Second call immediately after
        response2 = requests.get(f"{BASE_URL}/api/github?username=sanumaurya4u", timeout=15)
        
        if response2.status_code != 200:
            print_test_result("GitHub Cache Behavior", False, f"Second call failed: HTTP {response2.status_code}")
            return False
        
        data2 = response2.json()
        source2 = data2.get("source")
        
        # Second call should return cache if first was live or cache
        if source1 == "live" and source2 != "cache":
            print_test_result("GitHub Cache Behavior", False, f"Expected second call to be cached, got source1='{source1}', source2='{source2}'")
            return False
        
        print_test_result("GitHub Cache Behavior", True, f"Cache behavior working: first={source1}, second={source2}")
        return True
        
    except Exception as e:
        print_test_result("GitHub Cache Behavior", False, f"Request failed: {str(e)}")
        return False

def test_contact_post_endpoint():
    """Test POST /api/contact endpoint with valid and invalid data"""
    print("🔍 Testing Contact Form Submission...")
    
    # Test 1: Valid submission
    try:
        valid_data = {
            "name": "Test User",
            "email": "test@example.com", 
            "message": "Hello from test"
        }
        
        response = requests.post(
            f"{BASE_URL}/api/contact",
            json=valid_data,
            headers={"Content-Type": "application/json"},
            timeout=10
        )
        
        if response.status_code == 201:
            data = response.json()
            if data.get("success"):
                print_test_result("Contact Form - Valid Data", True, "Message submitted successfully")
                valid_submission_success = True
            else:
                print_test_result("Contact Form - Valid Data", False, f"Success=false: {data}")
                valid_submission_success = False
        else:
            print_test_result("Contact Form - Valid Data", False, f"HTTP {response.status_code}: {response.text}")
            valid_submission_success = False
            
    except Exception as e:
        print_test_result("Contact Form - Valid Data", False, f"Request failed: {str(e)}")
        valid_submission_success = False
    
    # Test 2: Missing fields validation
    try:
        invalid_data = {"name": "Test User"}  # Missing email and message
        
        response = requests.post(
            f"{BASE_URL}/api/contact",
            json=invalid_data,
            headers={"Content-Type": "application/json"},
            timeout=10
        )
        
        if response.status_code == 400:
            print_test_result("Contact Form - Missing Fields", True, "Correctly rejected missing fields")
            missing_fields_test = True
        else:
            print_test_result("Contact Form - Missing Fields", False, f"Expected 400, got {response.status_code}")
            missing_fields_test = False
            
    except Exception as e:
        print_test_result("Contact Form - Missing Fields", False, f"Request failed: {str(e)}")
        missing_fields_test = False
    
    # Test 3: Invalid email validation
    try:
        invalid_email_data = {
            "name": "Test User",
            "email": "invalid-email",
            "message": "Test message"
        }
        
        response = requests.post(
            f"{BASE_URL}/api/contact",
            json=invalid_email_data,
            headers={"Content-Type": "application/json"},
            timeout=10
        )
        
        if response.status_code == 400:
            print_test_result("Contact Form - Invalid Email", True, "Correctly rejected invalid email")
            invalid_email_test = True
        else:
            print_test_result("Contact Form - Invalid Email", False, f"Expected 400, got {response.status_code}")
            invalid_email_test = False
            
    except Exception as e:
        print_test_result("Contact Form - Invalid Email", False, f"Request failed: {str(e)}")
        invalid_email_test = False
    
    return valid_submission_success and missing_fields_test and invalid_email_test

def test_contact_get_endpoint():
    """Test GET /api/contact endpoint"""
    print("🔍 Testing Get Contact Messages...")
    try:
        response = requests.get(f"{BASE_URL}/api/contact", timeout=10)
        
        if response.status_code == 200:
            data = response.json()
            if data.get("success") and "messages" in data:
                messages = data["messages"]
                if isinstance(messages, list):
                    # Check if our test message is in the results
                    test_message_found = any(
                        msg.get("name") == "Test User" and 
                        msg.get("email") == "test@example.com" and
                        "Hello from test" in msg.get("message", "")
                        for msg in messages
                    )
                    
                    if test_message_found:
                        print_test_result("Get Contact Messages", True, f"Found {len(messages)} messages including test message")
                        return True
                    else:
                        print_test_result("Get Contact Messages", True, f"Found {len(messages)} messages (test message may not be present)")
                        return True
                else:
                    print_test_result("Get Contact Messages", False, "Messages is not a list")
                    return False
            else:
                print_test_result("Get Contact Messages", False, f"Unexpected response structure: {data}")
                return False
        else:
            print_test_result("Get Contact Messages", False, f"HTTP {response.status_code}: {response.text}")
            return False
            
    except Exception as e:
        print_test_result("Get Contact Messages", False, f"Request failed: {str(e)}")
        return False

def test_api_root():
    """Test GET /api (root) endpoint"""
    print("🔍 Testing API Root Endpoint...")
    try:
        response = requests.get(f"{BASE_URL}/api", timeout=10)
        
        if response.status_code == 200:
            data = response.json()
            if "message" in data and "routes" in data:
                print_test_result("API Root", True, f"API info returned: {data.get('message')}")
                return True
            else:
                print_test_result("API Root", False, f"Unexpected response structure: {data}")
                return False
        else:
            print_test_result("API Root", False, f"HTTP {response.status_code}: {response.text}")
            return False
            
    except Exception as e:
        print_test_result("API Root", False, f"Request failed: {str(e)}")
        return False

def main():
    """Run all backend tests"""
    print("=" * 60)
    print("🚀 PORTFOLIO WEBSITE BACKEND API TESTING")
    print(f"📍 Base URL: {BASE_URL}")
    print(f"🕐 Started at: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    print("=" * 60)
    print()
    
    # Track test results
    test_results = []
    
    # Run all tests
    test_results.append(("Health Check", test_health_endpoint()))
    test_results.append(("GitHub Basic Fetch", test_github_basic_fetch()))
    test_results.append(("GitHub Force Refresh", test_github_force_refresh()))
    test_results.append(("GitHub Cache Behavior", test_github_cache_behavior()))
    test_results.append(("Contact Form", test_contact_post_endpoint()))
    test_results.append(("Get Contact Messages", test_contact_get_endpoint()))
    test_results.append(("API Root", test_api_root()))
    
    # Summary
    print("=" * 60)
    print("📊 TEST SUMMARY")
    print("=" * 60)
    
    passed = sum(1 for _, result in test_results if result)
    total = len(test_results)
    
    for test_name, result in test_results:
        status = "✅ PASS" if result else "❌ FAIL"
        print(f"{status} {test_name}")
    
    print()
    print(f"📈 Results: {passed}/{total} tests passed")
    
    if passed == total:
        print("🎉 All tests passed!")
        return 0
    else:
        print("⚠️  Some tests failed!")
        return 1

if __name__ == "__main__":
    exit_code = main()
    sys.exit(exit_code)