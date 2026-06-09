import type { INodeProperties } from 'n8n-workflow';

export const defaultDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					]
				}
			},
			"options": [
				{
					"name": "Add Tags",
					"value": "Add Tags",
					"action": "Add Tags",
					"description": "Adds one or more tags to a trail, event data store, or channel, up to a limit of 50. Overwrites an existing tag's value when a new value is specified for an existing tag key. Tag key names must be unique; you cannot have two keys with the same name but different values. If you specify a key without a value, the tag will be created with the specified key and a value of null. You can tag a trail or event data store that applies to all Amazon Web Services Regions only from the Region in which the trail or event data store was created (also known as its home region).",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.AddTags"
						}
					}
				},
				{
					"name": "Cancel Query",
					"value": "Cancel Query",
					"action": "Cancel Query",
					"description": "Cancels a query if the query is not in a terminated state, such as <code>CANCELLED</code>, <code>FAILED</code>, <code>TIMED_OUT</code>, or <code>FINISHED</code>. You must specify an ARN value for <code>EventDataStore</code>. The ID of the query that you want to cancel is also required. When you run <code>CancelQuery</code>, the query status might show as <code>CANCELLED</code> even if the operation is not yet finished.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CancelQuery"
						}
					}
				},
				{
					"name": "Create Channel",
					"value": "Create Channel",
					"action": "Create Channel",
					"description": "Creates a channel for CloudTrail to ingest events from a partner or external source. After you create a channel, a CloudTrail Lake event data store can log events from the partner or source that you specify.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CreateChannel"
						}
					}
				},
				{
					"name": "Create Event Data Store",
					"value": "Create Event Data Store",
					"action": "Create Event Data Store",
					"description": "Creates a new event data store.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CreateEventDataStore"
						}
					}
				},
				{
					"name": "Create Trail",
					"value": "Create Trail",
					"action": "Create Trail",
					"description": "Creates a trail that specifies the settings for delivery of log data to an Amazon S3 bucket. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CreateTrail"
						}
					}
				},
				{
					"name": "Delete Channel",
					"value": "Delete Channel",
					"action": "Delete Channel",
					"description": "Deletes a channel.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeleteChannel"
						}
					}
				},
				{
					"name": "Delete Event Data Store",
					"value": "Delete Event Data Store",
					"action": "Delete Event Data Store",
					"description": "<p>Disables the event data store specified by <code>EventDataStore</code>, which accepts an event data store ARN. After you run <code>DeleteEventDataStore</code>, the event data store enters a <code>PENDING_DELETION</code> state, and is automatically deleted after a wait period of seven days. <code>TerminationProtectionEnabled</code> must be set to <code>False</code> on the event data store; this operation cannot work if <code>TerminationProtectionEnabled</code> is <code>True</code>.</p> <p>After you run <code>DeleteEventDataStore</code> on an event data store, you cannot run <code>ListQueries</code>, <code>DescribeQuery</code>, or <code>GetQueryResults</code> on queries that are using an event data store in a <code>PENDING_DELETION</code> state. An event data store in the <code>PENDING_DELETION</code> state does not incur costs.</p>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeleteEventDataStore"
						}
					}
				},
				{
					"name": "Delete Resource Policy",
					"value": "Delete Resource Policy",
					"action": "Delete Resource Policy",
					"description": " Deletes the resource-based policy attached to the CloudTrail channel. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeleteResourcePolicy"
						}
					}
				},
				{
					"name": "Delete Trail",
					"value": "Delete Trail",
					"action": "Delete Trail",
					"description": "Deletes a trail. This operation must be called from the region in which the trail was created. <code>DeleteTrail</code> cannot be called on the shadow trails (replicated trails in other regions) of a trail that is enabled in all regions.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeleteTrail"
						}
					}
				},
				{
					"name": "Deregister Organization Delegated Admin",
					"value": "Deregister Organization Delegated Admin",
					"action": "Deregister Organization Delegated Admin",
					"description": "Removes CloudTrail delegated administrator permissions from a member account in an organization.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeregisterOrganizationDelegatedAdmin"
						}
					}
				},
				{
					"name": "Describe Query",
					"value": "Describe Query",
					"action": "Describe Query",
					"description": "Returns metadata about a query, including query run time in milliseconds, number of events scanned and matched, and query status. You must specify an ARN for <code>EventDataStore</code>, and a value for <code>QueryID</code>.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DescribeQuery"
						}
					}
				},
				{
					"name": "Describe Trails",
					"value": "Describe Trails",
					"action": "Describe Trails",
					"description": "Retrieves settings for one or more trails associated with the current region for your account.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DescribeTrails"
						}
					}
				},
				{
					"name": "Get Channel",
					"value": "Get Channel",
					"action": "Get Channel",
					"description": " Returns information about a specific channel. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetChannel"
						}
					}
				},
				{
					"name": "Get Event Data Store",
					"value": "Get Event Data Store",
					"action": "Get Event Data Store",
					"description": "Returns information about an event data store specified as either an ARN or the ID portion of the ARN.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetEventDataStore"
						}
					}
				},
				{
					"name": "Get Event Selectors",
					"value": "Get Event Selectors",
					"action": "Get Event Selectors",
					"description": "<p>Describes the settings for the event selectors that you configured for your trail. The information returned for your event selectors includes the following:</p> <ul> <li> <p>If your event selector includes read-only events, write-only events, or all events. This applies to both management events and data events.</p> </li> <li> <p>If your event selector includes management events.</p> </li> <li> <p>If your event selector includes data events, the resources on which you are logging data events.</p> </li> </ul> <p>For more information about logging management and data events, see the following topics in the <i>CloudTrail User Guide</i>:</p> <ul> <li> <p> <a href=\"https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-management-events-with-cloudtrail.html\">Logging management events for trails </a> </p> </li> <li> <p> <a href=\"https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-data-events-with-cloudtrail.html\">Logging data events for trails </a> </p> </li> </ul>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetEventSelectors"
						}
					}
				},
				{
					"name": "Get Import",
					"value": "Get Import",
					"action": "Get Import",
					"description": " Returns information about a specific import. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetImport"
						}
					}
				},
				{
					"name": "Get Insight Selectors",
					"value": "Get Insight Selectors",
					"action": "Get Insight Selectors",
					"description": "<p>Describes the settings for the Insights event selectors that you configured for your trail. <code>GetInsightSelectors</code> shows if CloudTrail Insights event logging is enabled on the trail, and if it is, which insight types are enabled. If you run <code>GetInsightSelectors</code> on a trail that does not have Insights events enabled, the operation throws the exception <code>InsightNotEnabledException</code> </p> <p>For more information, see <a href=\"https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-insights-events-with-cloudtrail.html\">Logging CloudTrail Insights Events for Trails </a> in the <i>CloudTrail User Guide</i>.</p>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetInsightSelectors"
						}
					}
				},
				{
					"name": "Get Query Results",
					"value": "Get Query Results",
					"action": "Get Query Results",
					"description": "Gets event data results of a query. You must specify the <code>QueryID</code> value returned by the <code>StartQuery</code> operation, and an ARN for <code>EventDataStore</code>.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetQueryResults"
						}
					}
				},
				{
					"name": "Get Resource Policy",
					"value": "Get Resource Policy",
					"action": "Get Resource Policy",
					"description": " Retrieves the JSON text of the resource-based policy document attached to the CloudTrail channel. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetResourcePolicy"
						}
					}
				},
				{
					"name": "Get Trail",
					"value": "Get Trail",
					"action": "Get Trail",
					"description": "Returns settings information for a specified trail.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetTrail"
						}
					}
				},
				{
					"name": "Get Trail Status",
					"value": "Get Trail Status",
					"action": "Get Trail Status",
					"description": "Returns a JSON-formatted list of information about the specified trail. Fields include information on delivery errors, Amazon SNS and Amazon S3 errors, and start and stop logging times for each trail. This operation returns trail status from a single region. To return trail status from all regions, you must call the operation on each region.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetTrailStatus"
						}
					}
				},
				{
					"name": "List Channels",
					"value": "List Channels",
					"action": "List Channels",
					"description": " Lists the channels in the current account, and their source names. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListChannels"
						}
					}
				},
				{
					"name": "List Event Data Stores",
					"value": "List Event Data Stores",
					"action": "List Event Data Stores",
					"description": "Returns information about all event data stores in the account, in the current region.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListEventDataStores"
						}
					}
				},
				{
					"name": "List Import Failures",
					"value": "List Import Failures",
					"action": "List Import Failures",
					"description": " Returns a list of failures for the specified import. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListImportFailures"
						}
					}
				},
				{
					"name": "List Imports",
					"value": "List Imports",
					"action": "List Imports",
					"description": " Returns information on all imports, or a select set of imports by <code>ImportStatus</code> or <code>Destination</code>. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListImports"
						}
					}
				},
				{
					"name": "List Public Keys",
					"value": "List Public Keys",
					"action": "List Public Keys",
					"description": "<p>Returns all public keys whose private keys were used to sign the digest files within the specified time range. The public key is needed to validate digest files that were signed with its corresponding private key.</p> <note> <p>CloudTrail uses different private and public key pairs per region. Each digest file is signed with a private key unique to its region. When you validate a digest file from a specific region, you must look in the same region for its corresponding public key.</p> </note>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListPublicKeys"
						}
					}
				},
				{
					"name": "List Queries",
					"value": "List Queries",
					"action": "List Queries",
					"description": "Returns a list of queries and query statuses for the past seven days. You must specify an ARN value for <code>EventDataStore</code>. Optionally, to shorten the list of results, you can specify a time range, formatted as timestamps, by adding <code>StartTime</code> and <code>EndTime</code> parameters, and a <code>QueryStatus</code> value. Valid values for <code>QueryStatus</code> include <code>QUEUED</code>, <code>RUNNING</code>, <code>FINISHED</code>, <code>FAILED</code>, <code>TIMED_OUT</code>, or <code>CANCELLED</code>.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListQueries"
						}
					}
				},
				{
					"name": "List Tags",
					"value": "List Tags",
					"action": "List Tags",
					"description": "Lists the tags for the trail, event data store, or channel in the current region.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListTags"
						}
					}
				},
				{
					"name": "List Trails",
					"value": "List Trails",
					"action": "List Trails",
					"description": "Lists trails that are in the current account.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListTrails"
						}
					}
				},
				{
					"name": "Lookup Events",
					"value": "Lookup Events",
					"action": "Lookup Events",
					"description": "<p>Looks up <a href=\"https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-concepts.html#cloudtrail-concepts-management-events\">management events</a> or <a href=\"https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-concepts.html#cloudtrail-concepts-insights-events\">CloudTrail Insights events</a> that are captured by CloudTrail. You can look up events that occurred in a region within the last 90 days. Lookup supports the following attributes for management events:</p> <ul> <li> <p>Amazon Web Services access key</p> </li> <li> <p>Event ID</p> </li> <li> <p>Event name</p> </li> <li> <p>Event source</p> </li> <li> <p>Read only</p> </li> <li> <p>Resource name</p> </li> <li> <p>Resource type</p> </li> <li> <p>User name</p> </li> </ul> <p>Lookup supports the following attributes for Insights events:</p> <ul> <li> <p>Event ID</p> </li> <li> <p>Event name</p> </li> <li> <p>Event source</p> </li> </ul> <p>All attributes are optional. The default number of results returned is 50, with a maximum of 50 possible. The response includes a token that you can use to get the next page of results.</p> <important> <p>The rate of lookup requests is limited to two per second, per account, per region. If this limit is exceeded, a throttling error occurs.</p> </important>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.LookupEvents"
						}
					}
				},
				{
					"name": "Put Event Selectors",
					"value": "Put Event Selectors",
					"action": "Put Event Selectors",
					"description": "<p>Configures an event selector or advanced event selectors for your trail. Use event selectors or advanced event selectors to specify management and data event settings for your trail. By default, trails created without specific event selectors are configured to log all read and write management events, and no data events.</p> <p>When an event occurs in your account, CloudTrail evaluates the event selectors or advanced event selectors in all trails. For each trail, if the event matches any event selector, the trail processes and logs the event. If the event doesn't match any event selector, the trail doesn't log the event.</p> <p>Example</p> <ol> <li> <p>You create an event selector for a trail and specify that you want write-only events.</p> </li> <li> <p>The EC2 <code>GetConsoleOutput</code> and <code>RunInstances</code> API operations occur in your account.</p> </li> <li> <p>CloudTrail evaluates whether the events match your event selectors.</p> </li> <li> <p>The <code>RunInstances</code> is a write-only event and it matches your event selector. The trail logs the event.</p> </li> <li> <p>The <code>GetConsoleOutput</code> is a read-only event that doesn't match your event selector. The trail doesn't log the event. </p> </li> </ol> <p>The <code>PutEventSelectors</code> operation must be called from the region in which the trail was created; otherwise, an <code>InvalidHomeRegionException</code> exception is thrown.</p> <p>You can configure up to five event selectors for each trail. For more information, see <a href=\"https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-management-events-with-cloudtrail.html\">Logging management events for trails </a>, <a href=\"https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-data-events-with-cloudtrail.html\">Logging data events for trails </a>, and <a href=\"https://docs.aws.amazon.com/awscloudtrail/latest/userguide/WhatIsCloudTrail-Limits.html\">Quotas in CloudTrail</a> in the <i>CloudTrail User Guide</i>.</p> <p>You can add advanced event selectors, and conditions for your advanced event selectors, up to a maximum of 500 values for all conditions and selectors on a trail. You can use either <code>AdvancedEventSelectors</code> or <code>EventSelectors</code>, but not both. If you apply <code>AdvancedEventSelectors</code> to a trail, any existing <code>EventSelectors</code> are overwritten. For more information about advanced event selectors, see <a href=\"https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-data-events-with-cloudtrail.html\">Logging data events for trails</a> in the <i>CloudTrail User Guide</i>.</p>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.PutEventSelectors"
						}
					}
				},
				{
					"name": "Put Insight Selectors",
					"value": "Put Insight Selectors",
					"action": "Put Insight Selectors",
					"description": "Lets you enable Insights event logging by specifying the Insights selectors that you want to enable on an existing trail. You also use <code>PutInsightSelectors</code> to turn off Insights event logging, by passing an empty list of insight types. The valid Insights event types in this release are <code>ApiErrorRateInsight</code> and <code>ApiCallRateInsight</code>.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.PutInsightSelectors"
						}
					}
				},
				{
					"name": "Put Resource Policy",
					"value": "Put Resource Policy",
					"action": "Put Resource Policy",
					"description": " Attaches a resource-based permission policy to a CloudTrail channel that is used for an integration with an event source outside of Amazon Web Services. For more information about resource-based policies, see <a href=\"https://docs.aws.amazon.com/awscloudtrail/latest/userguide/security_iam_resource-based-policy-examples.html\">CloudTrail resource-based policy examples</a> in the <i>CloudTrail User Guide</i>. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.PutResourcePolicy"
						}
					}
				},
				{
					"name": "Register Organization Delegated Admin",
					"value": "Register Organization Delegated Admin",
					"action": "Register Organization Delegated Admin",
					"description": "Registers an organization’s member account as the CloudTrail delegated administrator.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.RegisterOrganizationDelegatedAdmin"
						}
					}
				},
				{
					"name": "Remove Tags",
					"value": "Remove Tags",
					"action": "Remove Tags",
					"description": "Removes the specified tags from a trail, event data store, or channel.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.RemoveTags"
						}
					}
				},
				{
					"name": "Restore Event Data Store",
					"value": "Restore Event Data Store",
					"action": "Restore Event Data Store",
					"description": "Restores a deleted event data store specified by <code>EventDataStore</code>, which accepts an event data store ARN. You can only restore a deleted event data store within the seven-day wait period after deletion. Restoring an event data store can take several minutes, depending on the size of the event data store.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.RestoreEventDataStore"
						}
					}
				},
				{
					"name": "Start Import",
					"value": "Start Import",
					"action": "Start Import",
					"description": "<p> Starts an import of logged trail events from a source S3 bucket to a destination event data store. By default, CloudTrail only imports events contained in the S3 bucket's <code>CloudTrail</code> prefix and the prefixes inside the <code>CloudTrail</code> prefix, and does not check prefixes for other Amazon Web Services services. If you want to import CloudTrail events contained in another prefix, you must include the prefix in the <code>S3LocationUri</code>. For more considerations about importing trail events, see <a href=\"https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-copy-trail-to-lake.html#cloudtrail-trail-copy-considerations\">Considerations</a>. </p> <p> When you start a new import, the <code>Destinations</code> and <code>ImportSource</code> parameters are required. Before starting a new import, disable any access control lists (ACLs) attached to the source S3 bucket. For more information about disabling ACLs, see <a href=\"https://docs.aws.amazon.com/AmazonS3/latest/userguide/about-object-ownership.html\">Controlling ownership of objects and disabling ACLs for your bucket</a>. </p> <p> When you retry an import, the <code>ImportID</code> parameter is required. </p> <note> <p> If the destination event data store is for an organization, you must use the management account to import trail events. You cannot use the delegated administrator account for the organization. </p> </note>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StartImport"
						}
					}
				},
				{
					"name": "Start Logging",
					"value": "Start Logging",
					"action": "Start Logging",
					"description": "Starts the recording of Amazon Web Services API calls and log file delivery for a trail. For a trail that is enabled in all regions, this operation must be called from the region in which the trail was created. This operation cannot be called on the shadow trails (replicated trails in other regions) of a trail that is enabled in all regions.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StartLogging"
						}
					}
				},
				{
					"name": "Start Query",
					"value": "Start Query",
					"action": "Start Query",
					"description": "Starts a CloudTrail Lake query. The required <code>QueryStatement</code> parameter provides your SQL query, enclosed in single quotation marks. Use the optional <code>DeliveryS3Uri</code> parameter to deliver the query results to an S3 bucket.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StartQuery"
						}
					}
				},
				{
					"name": "Stop Import",
					"value": "Stop Import",
					"action": "Stop Import",
					"description": " Stops a specified import. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StopImport"
						}
					}
				},
				{
					"name": "Stop Logging",
					"value": "Stop Logging",
					"action": "Stop Logging",
					"description": "Suspends the recording of Amazon Web Services API calls and log file delivery for the specified trail. Under most circumstances, there is no need to use this action. You can update a trail without stopping it first. This action is the only way to stop recording. For a trail enabled in all regions, this operation must be called from the region in which the trail was created, or an <code>InvalidHomeRegionException</code> will occur. This operation cannot be called on the shadow trails (replicated trails in other regions) of a trail enabled in all regions.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StopLogging"
						}
					}
				},
				{
					"name": "Update Channel",
					"value": "Update Channel",
					"action": "Update Channel",
					"description": "Updates a channel specified by a required channel ARN or UUID.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.UpdateChannel"
						}
					}
				},
				{
					"name": "Update Event Data Store",
					"value": "Update Event Data Store",
					"action": "Update Event Data Store",
					"description": "<p>Updates an event data store. The required <code>EventDataStore</code> value is an ARN or the ID portion of the ARN. Other parameters are optional, but at least one optional parameter must be specified, or CloudTrail throws an error. <code>RetentionPeriod</code> is in days, and valid values are integers between 90 and 2557. By default, <code>TerminationProtection</code> is enabled.</p> <p>For event data stores for CloudTrail events, <code>AdvancedEventSelectors</code> includes or excludes management and data events in your event data store. For more information about <code>AdvancedEventSelectors</code>, see <a>PutEventSelectorsRequest$AdvancedEventSelectors</a>. </p> <p> For event data stores for Config configuration items, Audit Manager evidence, or non-Amazon Web Services events, <code>AdvancedEventSelectors</code> includes events of that type in your event data store.</p>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.UpdateEventDataStore"
						}
					}
				},
				{
					"name": "Update Trail",
					"value": "Update Trail",
					"action": "Update Trail",
					"description": "Updates trail settings that control what events you are logging, and how to handle log files. Changes to a trail do not require stopping the CloudTrail service. Use this action to designate an existing bucket for log delivery. If the existing bucket has previously been a target for CloudTrail log files, an IAM policy exists for the bucket. <code>UpdateTrail</code> must be called from the region in which the trail was created; otherwise, an <code>InvalidHomeRegionException</code> is thrown.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.UpdateTrail"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.AddTags",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Add Tags"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.AddTags",
			"type": "options",
			"options": [
				{
					"name": "Com Amazonaws Cloudtrail v20131101 Cloud Trail 20131101 Add Tags",
					"value": "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.AddTags"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Add Tags"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Resource ID",
			"name": "ResourceId",
			"type": "string",
			"default": "",
			"description": "<p>Specifies the ARN of the trail, event data store, or channel to which one or more tags will be added.</p> <p>The format of a trail ARN is: <code>arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail</code> </p> <p>The format of an event data store ARN is: <code>arn:aws:cloudtrail:us-east-2:12345678910:eventdatastore/EXAMPLE-f852-4e8f-8bd1-bcf6cEXAMPLE</code> </p> <p>The format of a channel ARN is: <code>arn:aws:cloudtrail:us-east-2:123456789012:channel/01234567890</code> </p>",
			"routing": {
				"send": {
					"property": "ResourceId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Add Tags"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Tags List",
			"name": "TagsList",
			"type": "json",
			"default": "[\n  {\n    \"Value\": {}\n  }\n]",
			"description": "Contains a list of tags, up to a limit of 50",
			"routing": {
				"send": {
					"property": "TagsList",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Add Tags"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Add Tags"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CancelQuery",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Cancel Query"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CancelQuery",
			"type": "options",
			"options": [
				{
					"name": "Com Amazonaws Cloudtrail v20131101 Cloud Trail 20131101 Cancel Query",
					"value": "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CancelQuery"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Cancel Query"
					]
				}
			}
		},
		{
			"displayName": "Event Data Store",
			"name": "EventDataStore",
			"type": "string",
			"default": "",
			"description": "The ARN (or the ID suffix of the ARN) of an event data store on which the specified query is running.EventDataStore is no longer required by CancelQueryRequest",
			"routing": {
				"send": {
					"property": "EventDataStore",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Cancel Query"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Query ID",
			"name": "QueryId",
			"type": "string",
			"default": "",
			"description": "The ID of the query that you want to cancel. The <code>QueryId</code> comes from the response of a <code>StartQuery</code> operation.",
			"routing": {
				"send": {
					"property": "QueryId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Cancel Query"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Cancel Query"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CreateChannel",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Channel"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CreateChannel",
			"type": "options",
			"options": [
				{
					"name": "Com Amazonaws Cloudtrail v20131101 Cloud Trail 20131101 Create Channel",
					"value": "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CreateChannel"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Channel"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Name",
			"name": "Name",
			"type": "string",
			"default": "",
			"description": "The name of the channel.",
			"routing": {
				"send": {
					"property": "Name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Channel"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Source",
			"name": "Source",
			"type": "string",
			"default": "",
			"description": "<p>The name of the partner or external event source. You cannot change this name after you create the channel. A maximum of one channel is allowed per source.</p> <p> A source can be either <code>Custom</code> for all valid non-Amazon Web Services events, or the name of a partner event source. For information about the source names for available partners, see <a href=\"https://docs.aws.amazon.com/awscloudtrail/latest/userguide/query-event-data-store-integration.html#cloudtrail-lake-partner-information\">Additional information about integration partners</a> in the CloudTrail User Guide. </p>",
			"routing": {
				"send": {
					"property": "Source",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Channel"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Destinations",
			"name": "Destinations",
			"type": "json",
			"default": "[\n  {\n    \"Location\": {}\n  }\n]",
			"description": "One or more event data stores to which events arriving through a channel will be logged.",
			"routing": {
				"send": {
					"property": "Destinations",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Channel"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "Tags",
			"type": "json",
			"default": "[\n  {\n    \"Value\": {}\n  }\n]",
			"description": "A list of tags.",
			"routing": {
				"send": {
					"property": "Tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Channel"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Channel"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CreateEventDataStore",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Event Data Store"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CreateEventDataStore",
			"type": "options",
			"options": [
				{
					"name": "Com Amazonaws Cloudtrail v20131101 Cloud Trail 20131101 Create Event Data Store",
					"value": "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CreateEventDataStore"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Event Data Store"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Name",
			"name": "Name",
			"type": "string",
			"default": "",
			"description": "The name of the event data store.",
			"routing": {
				"send": {
					"property": "Name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Event Data Store"
					]
				}
			}
		},
		{
			"displayName": "Advanced Event Selectors",
			"name": "AdvancedEventSelectors",
			"type": "json",
			"default": "[\n  {\n    \"FieldSelectors\": {}\n  }\n]",
			"description": "<p>The advanced event selectors to use to select the events for the data store. You can configure up to five advanced event selectors for each event data store.</p> <p> For more information about how to use advanced event selectors to log CloudTrail events, see <a href=\"https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-data-events-with-cloudtrail.html#creating-data-event-selectors-advanced\">Log events by using advanced event selectors</a> in the CloudTrail User Guide.</p> <p>For more information about how to use advanced event selectors to include Config configuration items in your event data store, see <a href=\"https://docs.aws.amazon.com/awscloudtrail/latest/userguide/query-lake-cli.html#lake-cli-create-eds-config\">Create an event data store for Config configuration items</a> in the CloudTrail User Guide.</p> <p>For more information about how to use advanced event selectors to include non-Amazon Web Services events in your event data store, see <a href=\"https://docs.aws.amazon.com/awscloudtrail/latest/userguide/query-lake-cli.html#lake-cli-create-integration\">Create an integration to log events from outside Amazon Web Services</a> in the CloudTrail User Guide.</p>",
			"routing": {
				"send": {
					"property": "AdvancedEventSelectors",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Event Data Store"
					]
				}
			}
		},
		{
			"displayName": "Multi Region Enabled",
			"name": "MultiRegionEnabled",
			"type": "boolean",
			"default": true,
			"description": "Specifies whether the event data store includes events from all regions, or only from the region in which the event data store is created.",
			"routing": {
				"send": {
					"property": "MultiRegionEnabled",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Event Data Store"
					]
				}
			}
		},
		{
			"displayName": "Organization Enabled",
			"name": "OrganizationEnabled",
			"type": "boolean",
			"default": true,
			"description": "Specifies whether an event data store collects events logged for an organization in Organizations.",
			"routing": {
				"send": {
					"property": "OrganizationEnabled",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Event Data Store"
					]
				}
			}
		},
		{
			"displayName": "Retention Period",
			"name": "RetentionPeriod",
			"type": "number",
			"default": 0,
			"description": "The retention period of the event data store, in days. You can set a retention period of up to 2557 days, the equivalent of seven years.",
			"routing": {
				"send": {
					"property": "RetentionPeriod",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Event Data Store"
					]
				}
			}
		},
		{
			"displayName": "Termination Protection Enabled",
			"name": "TerminationProtectionEnabled",
			"type": "boolean",
			"default": true,
			"description": "Specifies whether termination protection is enabled for the event data store. If termination protection is enabled, you cannot delete the event data store until termination protection is disabled.",
			"routing": {
				"send": {
					"property": "TerminationProtectionEnabled",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Event Data Store"
					]
				}
			}
		},
		{
			"displayName": "Tags List",
			"name": "TagsList",
			"type": "json",
			"default": "[\n  {\n    \"Value\": {}\n  }\n]",
			"description": "A list of tags.",
			"routing": {
				"send": {
					"property": "TagsList",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Event Data Store"
					]
				}
			}
		},
		{
			"displayName": "Kms Key ID",
			"name": "KmsKeyId",
			"type": "string",
			"default": "",
			"description": "<p>Specifies the KMS key ID to use to encrypt the events delivered by CloudTrail. The value can be an alias name prefixed by <code>alias/</code>, a fully specified ARN to an alias, a fully specified ARN to a key, or a globally unique identifier.</p> <important> <p>Disabling or deleting the KMS key, or removing CloudTrail permissions on the key, prevents CloudTrail from logging events to the event data store, and prevents users from querying the data in the event data store that was encrypted with the key. After you associate an event data store with a KMS key, the KMS key cannot be removed or changed. Before you disable or delete a KMS key that you are using with an event data store, delete or back up your event data store.</p> </important> <p>CloudTrail also supports KMS multi-Region keys. For more information about multi-Region keys, see <a href=\"https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html\">Using multi-Region keys</a> in the <i>Key Management Service Developer Guide</i>.</p> <p>Examples:</p> <ul> <li> <p> <code>alias/MyAliasName</code> </p> </li> <li> <p> <code>arn:aws:kms:us-east-2:123456789012:alias/MyAliasName</code> </p> </li> <li> <p> <code>arn:aws:kms:us-east-2:123456789012:key/12345678-1234-1234-1234-123456789012</code> </p> </li> <li> <p> <code>12345678-1234-1234-1234-123456789012</code> </p> </li> </ul>",
			"routing": {
				"send": {
					"property": "KmsKeyId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Event Data Store"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Event Data Store"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CreateTrail",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Trail"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CreateTrail",
			"type": "options",
			"options": [
				{
					"name": "Com Amazonaws Cloudtrail v20131101 Cloud Trail 20131101 Create Trail",
					"value": "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CreateTrail"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Trail"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Name",
			"name": "Name",
			"type": "string",
			"default": "",
			"description": "<p>Specifies the name of the trail. The name must meet the following requirements:</p> <ul> <li> <p>Contain only ASCII letters (a-z, A-Z), numbers (0-9), periods (.), underscores (_), or dashes (-)</p> </li> <li> <p>Start with a letter or number, and end with a letter or number</p> </li> <li> <p>Be between 3 and 128 characters</p> </li> <li> <p>Have no adjacent periods, underscores or dashes. Names like <code>my-_namespace</code> and <code>my--namespace</code> are not valid.</p> </li> <li> <p>Not be in IP address format (for example, 192.168.5.4)</p> </li> </ul>",
			"routing": {
				"send": {
					"property": "Name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Trail"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "S 3 Bucket Name",
			"name": "S3BucketName",
			"type": "string",
			"default": "",
			"description": "Specifies the name of the Amazon S3 bucket designated for publishing log files. See <a href=\"https://docs.aws.amazon.com/awscloudtrail/latest/userguide/create_trail_naming_policy.html\">Amazon S3 Bucket Naming Requirements</a>.",
			"routing": {
				"send": {
					"property": "S3BucketName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Trail"
					]
				}
			}
		},
		{
			"displayName": "S 3 Key Prefix",
			"name": "S3KeyPrefix",
			"type": "string",
			"default": "",
			"description": "Specifies the Amazon S3 key prefix that comes after the name of the bucket you have designated for log file delivery. For more information, see <a href=\"https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-find-log-files.html\">Finding Your CloudTrail Log Files</a>. The maximum length is 200 characters.",
			"routing": {
				"send": {
					"property": "S3KeyPrefix",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Trail"
					]
				}
			}
		},
		{
			"displayName": "Sns Topic Name",
			"name": "SnsTopicName",
			"type": "string",
			"default": "",
			"description": "Specifies the name of the Amazon SNS topic defined for notification of log file delivery. The maximum length is 256 characters.",
			"routing": {
				"send": {
					"property": "SnsTopicName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Trail"
					]
				}
			}
		},
		{
			"displayName": "Include Global Service Events",
			"name": "IncludeGlobalServiceEvents",
			"type": "boolean",
			"default": true,
			"description": "Specifies whether the trail is publishing events from global services such as IAM to the log files.",
			"routing": {
				"send": {
					"property": "IncludeGlobalServiceEvents",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Trail"
					]
				}
			}
		},
		{
			"displayName": "Is Multi Region Trail",
			"name": "IsMultiRegionTrail",
			"type": "boolean",
			"default": true,
			"description": "Specifies whether the trail is created in the current region or in all regions. The default is false, which creates a trail only in the region where you are signed in. As a best practice, consider creating trails that log events in all regions.",
			"routing": {
				"send": {
					"property": "IsMultiRegionTrail",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Trail"
					]
				}
			}
		},
		{
			"displayName": "Enable Log File Validation",
			"name": "EnableLogFileValidation",
			"type": "boolean",
			"default": true,
			"description": "<p>Specifies whether log file integrity validation is enabled. The default is false.</p> <note> <p>When you disable log file integrity validation, the chain of digest files is broken after one hour. CloudTrail does not create digest files for log files that were delivered during a period in which log file integrity validation was disabled. For example, if you enable log file integrity validation at noon on January 1, disable it at noon on January 2, and re-enable it at noon on January 10, digest files will not be created for the log files delivered from noon on January 2 to noon on January 10. The same applies whenever you stop CloudTrail logging or delete a trail.</p> </note>",
			"routing": {
				"send": {
					"property": "EnableLogFileValidation",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Trail"
					]
				}
			}
		},
		{
			"displayName": "Cloud Watch Logs Log Group Arn",
			"name": "CloudWatchLogsLogGroupArn",
			"type": "string",
			"default": "",
			"description": "<p>Specifies a log group name using an Amazon Resource Name (ARN), a unique identifier that represents the log group to which CloudTrail logs will be delivered. You must use a log group that exists in your account.</p> <p>Not required unless you specify <code>CloudWatchLogsRoleArn</code>.</p>",
			"routing": {
				"send": {
					"property": "CloudWatchLogsLogGroupArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Trail"
					]
				}
			}
		},
		{
			"displayName": "Cloud Watch Logs Role Arn",
			"name": "CloudWatchLogsRoleArn",
			"type": "string",
			"default": "",
			"description": "Specifies the role for the CloudWatch Logs endpoint to assume to write to a user's log group. You must use a role that exists in your account.",
			"routing": {
				"send": {
					"property": "CloudWatchLogsRoleArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Trail"
					]
				}
			}
		},
		{
			"displayName": "Kms Key ID",
			"name": "KmsKeyId",
			"type": "string",
			"default": "",
			"description": "<p>Specifies the KMS key ID to use to encrypt the logs delivered by CloudTrail. The value can be an alias name prefixed by <code>alias/</code>, a fully specified ARN to an alias, a fully specified ARN to a key, or a globally unique identifier.</p> <p>CloudTrail also supports KMS multi-Region keys. For more information about multi-Region keys, see <a href=\"https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html\">Using multi-Region keys</a> in the <i>Key Management Service Developer Guide</i>.</p> <p>Examples:</p> <ul> <li> <p> <code>alias/MyAliasName</code> </p> </li> <li> <p> <code>arn:aws:kms:us-east-2:123456789012:alias/MyAliasName</code> </p> </li> <li> <p> <code>arn:aws:kms:us-east-2:123456789012:key/12345678-1234-1234-1234-123456789012</code> </p> </li> <li> <p> <code>12345678-1234-1234-1234-123456789012</code> </p> </li> </ul>",
			"routing": {
				"send": {
					"property": "KmsKeyId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Trail"
					]
				}
			}
		},
		{
			"displayName": "Is Organization Trail",
			"name": "IsOrganizationTrail",
			"type": "boolean",
			"default": true,
			"description": "Specifies whether the trail is created for all accounts in an organization in Organizations, or only for the current Amazon Web Services account. The default is false, and cannot be true unless the call is made on behalf of an Amazon Web Services account that is the management account or delegated administrator account for an organization in Organizations.",
			"routing": {
				"send": {
					"property": "IsOrganizationTrail",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Trail"
					]
				}
			}
		},
		{
			"displayName": "Tags List",
			"name": "TagsList",
			"type": "json",
			"default": "[\n  {\n    \"Value\": {}\n  }\n]",
			"description": "A list of tags.",
			"routing": {
				"send": {
					"property": "TagsList",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Trail"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Trail"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeleteChannel",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Channel"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeleteChannel",
			"type": "options",
			"options": [
				{
					"name": "Com Amazonaws Cloudtrail v20131101 Cloud Trail 20131101 Delete Channel",
					"value": "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeleteChannel"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Channel"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Channel",
			"name": "Channel",
			"type": "string",
			"default": "",
			"description": "The ARN or the <code>UUID</code> value of the channel that you want to delete.",
			"routing": {
				"send": {
					"property": "Channel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Channel"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Channel"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeleteEventDataStore",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Event Data Store"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeleteEventDataStore",
			"type": "options",
			"options": [
				{
					"name": "Com Amazonaws Cloudtrail v20131101 Cloud Trail 20131101 Delete Event Data Store",
					"value": "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeleteEventDataStore"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Event Data Store"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Event Data Store",
			"name": "EventDataStore",
			"type": "string",
			"default": "",
			"description": "The ARN (or the ID suffix of the ARN) of the event data store to delete.",
			"routing": {
				"send": {
					"property": "EventDataStore",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Event Data Store"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Event Data Store"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeleteResourcePolicy",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Resource Policy"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeleteResourcePolicy",
			"type": "options",
			"options": [
				{
					"name": "Com Amazonaws Cloudtrail v20131101 Cloud Trail 20131101 Delete Resource Policy",
					"value": "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeleteResourcePolicy"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Resource Policy"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Resource Arn",
			"name": "ResourceArn",
			"type": "string",
			"default": "",
			"description": " The Amazon Resource Name (ARN) of the CloudTrail channel you're deleting the resource-based policy from. The following is the format of a resource ARN: <code>arn:aws:cloudtrail:us-east-2:123456789012:channel/MyChannel</code>. ",
			"routing": {
				"send": {
					"property": "ResourceArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Resource Policy"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Resource Policy"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeleteTrail",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Trail"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeleteTrail",
			"type": "options",
			"options": [
				{
					"name": "Com Amazonaws Cloudtrail v20131101 Cloud Trail 20131101 Delete Trail",
					"value": "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeleteTrail"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Trail"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Name",
			"name": "Name",
			"type": "string",
			"default": "",
			"description": "Specifies the name or the CloudTrail ARN of the trail to be deleted. The following is the format of a trail ARN. <code>arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail</code> ",
			"routing": {
				"send": {
					"property": "Name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Trail"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Trail"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeregisterOrganizationDelegatedAdmin",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Deregister Organization Delegated Admin"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeregisterOrganizationDelegatedAdmin",
			"type": "options",
			"options": [
				{
					"name": "Com Amazonaws Cloudtrail v20131101 Cloud Trail 20131101 Deregister Organization Delegated Admin",
					"value": "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeregisterOrganizationDelegatedAdmin"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Deregister Organization Delegated Admin"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Delegated Admin Account ID",
			"name": "DelegatedAdminAccountId",
			"type": "string",
			"default": "",
			"description": "A delegated administrator account ID. This is a member account in an organization that is currently designated as a delegated administrator.",
			"routing": {
				"send": {
					"property": "DelegatedAdminAccountId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Deregister Organization Delegated Admin"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Deregister Organization Delegated Admin"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DescribeQuery",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Query"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DescribeQuery",
			"type": "options",
			"options": [
				{
					"name": "Com Amazonaws Cloudtrail v20131101 Cloud Trail 20131101 Describe Query",
					"value": "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DescribeQuery"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Query"
					]
				}
			}
		},
		{
			"displayName": "Event Data Store",
			"name": "EventDataStore",
			"type": "string",
			"default": "",
			"description": "The ARN (or the ID suffix of the ARN) of an event data store on which the specified query was run.EventDataStore is no longer required by DescribeQueryRequest",
			"routing": {
				"send": {
					"property": "EventDataStore",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Query"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Query ID",
			"name": "QueryId",
			"type": "string",
			"default": "",
			"description": "The query ID.",
			"routing": {
				"send": {
					"property": "QueryId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Query"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Query"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DescribeTrails",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Trails"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DescribeTrails",
			"type": "options",
			"options": [
				{
					"name": "Com Amazonaws Cloudtrail v20131101 Cloud Trail 20131101 Describe Trails",
					"value": "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DescribeTrails"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Trails"
					]
				}
			}
		},
		{
			"displayName": "Trail Name List",
			"name": "trailNameList",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "<p>Specifies a list of trail names, trail ARNs, or both, of the trails to describe. The format of a trail ARN is:</p> <p> <code>arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail</code> </p> <p>If an empty list is specified, information for the trail in the current region is returned.</p> <ul> <li> <p>If an empty list is specified and <code>IncludeShadowTrails</code> is false, then information for all trails in the current region is returned.</p> </li> <li> <p>If an empty list is specified and IncludeShadowTrails is null or true, then information for all trails in the current region and any associated shadow trails in other regions is returned.</p> </li> </ul> <note> <p>If one or more trail names are specified, information is returned only if the names match the names of trails belonging only to the current region and current account. To return information about a trail in another region, you must specify its trail ARN.</p> </note>",
			"routing": {
				"send": {
					"property": "trailNameList",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Trails"
					]
				}
			}
		},
		{
			"displayName": "Include Shadow Trails",
			"name": "includeShadowTrails",
			"type": "boolean",
			"default": true,
			"description": "Specifies whether to include shadow trails in the response. A shadow trail is the replication in a region of a trail that was created in a different region, or in the case of an organization trail, the replication of an organization trail in member accounts. If you do not include shadow trails, organization trails in a member account and region replication trails will not be returned. The default is true.",
			"routing": {
				"send": {
					"property": "includeShadowTrails",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Trails"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Trails"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetChannel",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Channel"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetChannel",
			"type": "options",
			"options": [
				{
					"name": "Com Amazonaws Cloudtrail v20131101 Cloud Trail 20131101 Get Channel",
					"value": "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetChannel"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Channel"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Channel",
			"name": "Channel",
			"type": "string",
			"default": "",
			"description": "The ARN or <code>UUID</code> of a channel.",
			"routing": {
				"send": {
					"property": "Channel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Channel"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Channel"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetEventDataStore",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Event Data Store"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetEventDataStore",
			"type": "options",
			"options": [
				{
					"name": "Com Amazonaws Cloudtrail v20131101 Cloud Trail 20131101 Get Event Data Store",
					"value": "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetEventDataStore"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Event Data Store"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Event Data Store",
			"name": "EventDataStore",
			"type": "string",
			"default": "",
			"description": "The ARN (or ID suffix of the ARN) of the event data store about which you want information.",
			"routing": {
				"send": {
					"property": "EventDataStore",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Event Data Store"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Event Data Store"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetEventSelectors",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Event Selectors"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetEventSelectors",
			"type": "options",
			"options": [
				{
					"name": "Com Amazonaws Cloudtrail v20131101 Cloud Trail 20131101 Get Event Selectors",
					"value": "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetEventSelectors"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Event Selectors"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Trail Name",
			"name": "TrailName",
			"type": "string",
			"default": "",
			"description": "<p>Specifies the name of the trail or trail ARN. If you specify a trail name, the string must meet the following requirements:</p> <ul> <li> <p>Contain only ASCII letters (a-z, A-Z), numbers (0-9), periods (.), underscores (_), or dashes (-)</p> </li> <li> <p>Start with a letter or number, and end with a letter or number</p> </li> <li> <p>Be between 3 and 128 characters</p> </li> <li> <p>Have no adjacent periods, underscores or dashes. Names like <code>my-_namespace</code> and <code>my--namespace</code> are not valid.</p> </li> <li> <p>Not be in IP address format (for example, 192.168.5.4)</p> </li> </ul> <p>If you specify a trail ARN, it must be in the format:</p> <p> <code>arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail</code> </p>",
			"routing": {
				"send": {
					"property": "TrailName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Event Selectors"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Event Selectors"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetImport",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Import"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetImport",
			"type": "options",
			"options": [
				{
					"name": "Com Amazonaws Cloudtrail v20131101 Cloud Trail 20131101 Get Import",
					"value": "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetImport"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Import"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Import ID",
			"name": "ImportId",
			"type": "string",
			"default": "",
			"description": " The ID for the import. ",
			"routing": {
				"send": {
					"property": "ImportId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Import"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Import"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetInsightSelectors",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Insight Selectors"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetInsightSelectors",
			"type": "options",
			"options": [
				{
					"name": "Com Amazonaws Cloudtrail v20131101 Cloud Trail 20131101 Get Insight Selectors",
					"value": "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetInsightSelectors"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Insight Selectors"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Trail Name",
			"name": "TrailName",
			"type": "string",
			"default": "",
			"description": "<p>Specifies the name of the trail or trail ARN. If you specify a trail name, the string must meet the following requirements:</p> <ul> <li> <p>Contain only ASCII letters (a-z, A-Z), numbers (0-9), periods (.), underscores (_), or dashes (-)</p> </li> <li> <p>Start with a letter or number, and end with a letter or number</p> </li> <li> <p>Be between 3 and 128 characters</p> </li> <li> <p>Have no adjacent periods, underscores or dashes. Names like <code>my-_namespace</code> and <code>my--namespace</code> are not valid.</p> </li> <li> <p>Not be in IP address format (for example, 192.168.5.4)</p> </li> </ul> <p>If you specify a trail ARN, it must be in the format:</p> <p> <code>arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail</code> </p>",
			"routing": {
				"send": {
					"property": "TrailName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Insight Selectors"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Insight Selectors"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetQueryResults",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Query Results"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"description": "Pagination token",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "NextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Query Results"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetQueryResults",
			"type": "options",
			"options": [
				{
					"name": "Com Amazonaws Cloudtrail v20131101 Cloud Trail 20131101 Get Query Results",
					"value": "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetQueryResults"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Query Results"
					]
				}
			}
		},
		{
			"displayName": "Event Data Store",
			"name": "EventDataStore",
			"type": "string",
			"default": "",
			"description": "The ARN (or ID suffix of the ARN) of the event data store against which the query was run.EventDataStore is no longer required by GetQueryResultsRequest",
			"routing": {
				"send": {
					"property": "EventDataStore",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Query Results"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Query ID",
			"name": "QueryId",
			"type": "string",
			"default": "",
			"description": "The ID of the query for which you want to get results.",
			"routing": {
				"send": {
					"property": "QueryId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Query Results"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"type": "string",
			"default": "",
			"description": "A token you can use to get the next page of query results.",
			"routing": {
				"send": {
					"property": "NextToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Query Results"
					]
				}
			}
		},
		{
			"displayName": "Max Query Results",
			"name": "MaxQueryResults",
			"type": "number",
			"default": 0,
			"description": "The maximum number of query results to display on a single page.",
			"routing": {
				"send": {
					"property": "MaxQueryResults",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Query Results"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Query Results"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetResourcePolicy",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Resource Policy"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetResourcePolicy",
			"type": "options",
			"options": [
				{
					"name": "Com Amazonaws Cloudtrail v20131101 Cloud Trail 20131101 Get Resource Policy",
					"value": "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetResourcePolicy"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Resource Policy"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Resource Arn",
			"name": "ResourceArn",
			"type": "string",
			"default": "",
			"description": " The Amazon Resource Name (ARN) of the CloudTrail channel attached to the resource-based policy. The following is the format of a resource ARN: <code>arn:aws:cloudtrail:us-east-2:123456789012:channel/MyChannel</code>. ",
			"routing": {
				"send": {
					"property": "ResourceArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Resource Policy"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Resource Policy"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetTrail",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Trail"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetTrail",
			"type": "options",
			"options": [
				{
					"name": "Com Amazonaws Cloudtrail v20131101 Cloud Trail 20131101 Get Trail",
					"value": "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetTrail"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Trail"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Name",
			"name": "Name",
			"type": "string",
			"default": "",
			"description": "The name or the Amazon Resource Name (ARN) of the trail for which you want to retrieve settings information.",
			"routing": {
				"send": {
					"property": "Name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Trail"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Trail"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetTrailStatus",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Trail Status"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetTrailStatus",
			"type": "options",
			"options": [
				{
					"name": "Com Amazonaws Cloudtrail v20131101 Cloud Trail 20131101 Get Trail Status",
					"value": "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetTrailStatus"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Trail Status"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Name",
			"name": "Name",
			"type": "string",
			"default": "",
			"description": "<p>Specifies the name or the CloudTrail ARN of the trail for which you are requesting status. To get the status of a shadow trail (a replication of the trail in another region), you must specify its ARN. The following is the format of a trail ARN.</p> <p> <code>arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail</code> </p>",
			"routing": {
				"send": {
					"property": "Name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Trail Status"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Trail Status"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListChannels",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Channels"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"description": "Pagination limit",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "MaxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Channels"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"description": "Pagination token",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "NextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Channels"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListChannels",
			"type": "options",
			"options": [
				{
					"name": "Com Amazonaws Cloudtrail v20131101 Cloud Trail 20131101 List Channels",
					"value": "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListChannels"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Channels"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"type": "number",
			"default": 0,
			"description": " The maximum number of CloudTrail channels to display on a single page. ",
			"routing": {
				"send": {
					"property": "MaxResults",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Channels"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"type": "string",
			"default": "",
			"description": "The token to use to get the next page of results after a previous API call. This token must be passed in with the same parameters that were specified in the original call. For example, if the original call specified an AttributeKey of 'Username' with a value of 'root', the call with NextToken should include those same parameters.",
			"routing": {
				"send": {
					"property": "NextToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Channels"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Channels"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListEventDataStores",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Event Data Stores"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"description": "Pagination limit",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "MaxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Event Data Stores"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"description": "Pagination token",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "NextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Event Data Stores"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListEventDataStores",
			"type": "options",
			"options": [
				{
					"name": "Com Amazonaws Cloudtrail v20131101 Cloud Trail 20131101 List Event Data Stores",
					"value": "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListEventDataStores"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Event Data Stores"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"type": "string",
			"default": "",
			"description": "A token you can use to get the next page of event data store results.",
			"routing": {
				"send": {
					"property": "NextToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Event Data Stores"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"type": "number",
			"default": 0,
			"description": "The maximum number of event data stores to display on a single page.",
			"routing": {
				"send": {
					"property": "MaxResults",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Event Data Stores"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Event Data Stores"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListImportFailures",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Import Failures"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"description": "Pagination limit",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "MaxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Import Failures"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"description": "Pagination token",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "NextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Import Failures"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListImportFailures",
			"type": "options",
			"options": [
				{
					"name": "Com Amazonaws Cloudtrail v20131101 Cloud Trail 20131101 List Import Failures",
					"value": "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListImportFailures"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Import Failures"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Import ID",
			"name": "ImportId",
			"type": "string",
			"default": "",
			"description": " The ID of the import. ",
			"routing": {
				"send": {
					"property": "ImportId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Import Failures"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"type": "number",
			"default": 0,
			"description": " The maximum number of failures to display on a single page. ",
			"routing": {
				"send": {
					"property": "MaxResults",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Import Failures"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"type": "string",
			"default": "",
			"description": " A token you can use to get the next page of import failures. ",
			"routing": {
				"send": {
					"property": "NextToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Import Failures"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Import Failures"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListImports",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Imports"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"description": "Pagination limit",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "MaxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Imports"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"description": "Pagination token",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "NextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Imports"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListImports",
			"type": "options",
			"options": [
				{
					"name": "Com Amazonaws Cloudtrail v20131101 Cloud Trail 20131101 List Imports",
					"value": "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListImports"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Imports"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"type": "number",
			"default": 0,
			"description": " The maximum number of imports to display on a single page. ",
			"routing": {
				"send": {
					"property": "MaxResults",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Imports"
					]
				}
			}
		},
		{
			"displayName": "Destination",
			"name": "Destination",
			"type": "string",
			"default": "",
			"description": " The ARN of the destination event data store. ",
			"routing": {
				"send": {
					"property": "Destination",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Imports"
					]
				}
			}
		},
		{
			"displayName": "Import Status",
			"name": "ImportStatus",
			"type": "options",
			"default": "INITIALIZING",
			"description": " The status of the import. ",
			"options": [
				{
					"name": "INITIALIZING",
					"value": "INITIALIZING"
				},
				{
					"name": "IN PROGRESS",
					"value": "IN_PROGRESS"
				},
				{
					"name": "FAILED",
					"value": "FAILED"
				},
				{
					"name": "STOPPED",
					"value": "STOPPED"
				},
				{
					"name": "COMPLETED",
					"value": "COMPLETED"
				}
			],
			"routing": {
				"send": {
					"property": "ImportStatus",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Imports"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"type": "string",
			"default": "",
			"description": " A token you can use to get the next page of import results. ",
			"routing": {
				"send": {
					"property": "NextToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Imports"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Imports"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListPublicKeys",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Public Keys"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"description": "Pagination token",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "NextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Public Keys"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListPublicKeys",
			"type": "options",
			"options": [
				{
					"name": "Com Amazonaws Cloudtrail v20131101 Cloud Trail 20131101 List Public Keys",
					"value": "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListPublicKeys"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Public Keys"
					]
				}
			}
		},
		{
			"displayName": "Start Time",
			"name": "StartTime",
			"type": "string",
			"default": "",
			"description": "Optionally specifies, in UTC, the start of the time range to look up public keys for CloudTrail digest files. If not specified, the current time is used, and the current public key is returned.",
			"routing": {
				"send": {
					"property": "StartTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Public Keys"
					]
				}
			}
		},
		{
			"displayName": "End Time",
			"name": "EndTime",
			"type": "string",
			"default": "",
			"description": "Optionally specifies, in UTC, the end of the time range to look up public keys for CloudTrail digest files. If not specified, the current time is used.",
			"routing": {
				"send": {
					"property": "EndTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Public Keys"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"type": "string",
			"default": "",
			"description": "Reserved for future use.",
			"routing": {
				"send": {
					"property": "NextToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Public Keys"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Public Keys"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListQueries",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Queries"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"description": "Pagination limit",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "MaxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Queries"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"description": "Pagination token",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "NextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Queries"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListQueries",
			"type": "options",
			"options": [
				{
					"name": "Com Amazonaws Cloudtrail v20131101 Cloud Trail 20131101 List Queries",
					"value": "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListQueries"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Queries"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Event Data Store",
			"name": "EventDataStore",
			"type": "string",
			"default": "",
			"description": "The ARN (or the ID suffix of the ARN) of an event data store on which queries were run.",
			"routing": {
				"send": {
					"property": "EventDataStore",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Queries"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"type": "string",
			"default": "",
			"description": "A token you can use to get the next page of results.",
			"routing": {
				"send": {
					"property": "NextToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Queries"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"type": "number",
			"default": 0,
			"description": "The maximum number of queries to show on a page.",
			"routing": {
				"send": {
					"property": "MaxResults",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Queries"
					]
				}
			}
		},
		{
			"displayName": "Start Time",
			"name": "StartTime",
			"type": "string",
			"default": "",
			"description": "Use with <code>EndTime</code> to bound a <code>ListQueries</code> request, and limit its results to only those queries run within a specified time period.",
			"routing": {
				"send": {
					"property": "StartTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Queries"
					]
				}
			}
		},
		{
			"displayName": "End Time",
			"name": "EndTime",
			"type": "string",
			"default": "",
			"description": "Use with <code>StartTime</code> to bound a <code>ListQueries</code> request, and limit its results to only those queries run within a specified time period.",
			"routing": {
				"send": {
					"property": "EndTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Queries"
					]
				}
			}
		},
		{
			"displayName": "Query Status",
			"name": "QueryStatus",
			"type": "options",
			"default": "QUEUED",
			"description": "The status of queries that you want to return in results. Valid values for <code>QueryStatus</code> include <code>QUEUED</code>, <code>RUNNING</code>, <code>FINISHED</code>, <code>FAILED</code>, <code>TIMED_OUT</code>, or <code>CANCELLED</code>.",
			"options": [
				{
					"name": "QUEUED",
					"value": "QUEUED"
				},
				{
					"name": "RUNNING",
					"value": "RUNNING"
				},
				{
					"name": "FINISHED",
					"value": "FINISHED"
				},
				{
					"name": "FAILED",
					"value": "FAILED"
				},
				{
					"name": "CANCELLED",
					"value": "CANCELLED"
				},
				{
					"name": "TIMED OUT",
					"value": "TIMED_OUT"
				}
			],
			"routing": {
				"send": {
					"property": "QueryStatus",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Queries"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Queries"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListTags",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Tags"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"description": "Pagination token",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "NextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Tags"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListTags",
			"type": "options",
			"options": [
				{
					"name": "Com Amazonaws Cloudtrail v20131101 Cloud Trail 20131101 List Tags",
					"value": "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListTags"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Tags"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Resource ID List",
			"name": "ResourceIdList",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Specifies a list of trail, event data store, or channel ARNs whose tags will be listed. The list has a limit of 20 ARNs.",
			"routing": {
				"send": {
					"property": "ResourceIdList",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Tags"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"type": "string",
			"default": "",
			"description": "Reserved for future use.",
			"routing": {
				"send": {
					"property": "NextToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Tags"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Tags"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListTrails",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Trails"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"description": "Pagination token",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "NextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Trails"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListTrails",
			"type": "options",
			"options": [
				{
					"name": "Com Amazonaws Cloudtrail v20131101 Cloud Trail 20131101 List Trails",
					"value": "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListTrails"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Trails"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"type": "string",
			"default": "",
			"description": "The token to use to get the next page of results after a previous API call. This token must be passed in with the same parameters that were specified in the original call. For example, if the original call specified an AttributeKey of 'Username' with a value of 'root', the call with NextToken should include those same parameters.",
			"routing": {
				"send": {
					"property": "NextToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Trails"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Trails"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.LookupEvents",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Lookup Events"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"description": "Pagination limit",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "MaxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Lookup Events"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"description": "Pagination token",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "NextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Lookup Events"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.LookupEvents",
			"type": "options",
			"options": [
				{
					"name": "Com Amazonaws Cloudtrail v20131101 Cloud Trail 20131101 Lookup Events",
					"value": "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.LookupEvents"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Lookup Events"
					]
				}
			}
		},
		{
			"displayName": "Lookup Attributes",
			"name": "LookupAttributes",
			"type": "json",
			"default": "[\n  {\n    \"AttributeValue\": {}\n  }\n]",
			"description": "Contains a list of lookup attributes. Currently the list can contain only one item.",
			"routing": {
				"send": {
					"property": "LookupAttributes",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Lookup Events"
					]
				}
			}
		},
		{
			"displayName": "Start Time",
			"name": "StartTime",
			"type": "string",
			"default": "",
			"description": "Specifies that only events that occur after or at the specified time are returned. If the specified start time is after the specified end time, an error is returned.",
			"routing": {
				"send": {
					"property": "StartTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Lookup Events"
					]
				}
			}
		},
		{
			"displayName": "End Time",
			"name": "EndTime",
			"type": "string",
			"default": "",
			"description": "Specifies that only events that occur before or at the specified time are returned. If the specified end time is before the specified start time, an error is returned.",
			"routing": {
				"send": {
					"property": "EndTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Lookup Events"
					]
				}
			}
		},
		{
			"displayName": "Event Category",
			"name": "EventCategory",
			"type": "options",
			"default": "insight",
			"description": "Specifies the event category. If you do not specify an event category, events of the category are not returned in the response. For example, if you do not specify <code>insight</code> as the value of <code>EventCategory</code>, no Insights events are returned.",
			"options": [
				{
					"name": "Insight",
					"value": "insight"
				}
			],
			"routing": {
				"send": {
					"property": "EventCategory",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Lookup Events"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"type": "number",
			"default": 0,
			"description": "The number of events to return. Possible values are 1 through 50. The default is 50.",
			"routing": {
				"send": {
					"property": "MaxResults",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Lookup Events"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"type": "string",
			"default": "",
			"description": "The token to use to get the next page of results after a previous API call. This token must be passed in with the same parameters that were specified in the original call. For example, if the original call specified an AttributeKey of 'Username' with a value of 'root', the call with NextToken should include those same parameters.",
			"routing": {
				"send": {
					"property": "NextToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Lookup Events"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Lookup Events"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.PutEventSelectors",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Event Selectors"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.PutEventSelectors",
			"type": "options",
			"options": [
				{
					"name": "Com Amazonaws Cloudtrail v20131101 Cloud Trail 20131101 Put Event Selectors",
					"value": "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.PutEventSelectors"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Event Selectors"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Trail Name",
			"name": "TrailName",
			"type": "string",
			"default": "",
			"description": "<p>Specifies the name of the trail or trail ARN. If you specify a trail name, the string must meet the following requirements:</p> <ul> <li> <p>Contain only ASCII letters (a-z, A-Z), numbers (0-9), periods (.), underscores (_), or dashes (-)</p> </li> <li> <p>Start with a letter or number, and end with a letter or number</p> </li> <li> <p>Be between 3 and 128 characters</p> </li> <li> <p>Have no adjacent periods, underscores or dashes. Names like <code>my-_namespace</code> and <code>my--namespace</code> are not valid.</p> </li> <li> <p>Not be in IP address format (for example, 192.168.5.4)</p> </li> </ul> <p>If you specify a trail ARN, it must be in the following format.</p> <p> <code>arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail</code> </p>",
			"routing": {
				"send": {
					"property": "TrailName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Event Selectors"
					]
				}
			}
		},
		{
			"displayName": "Event Selectors",
			"name": "EventSelectors",
			"type": "json",
			"default": "[\n  {\n    \"IncludeManagementEvents\": {},\n    \"DataResources\": {},\n    \"ExcludeManagementEventSources\": {}\n  }\n]",
			"description": "Specifies the settings for your event selectors. You can configure up to five event selectors for a trail. You can use either <code>EventSelectors</code> or <code>AdvancedEventSelectors</code> in a <code>PutEventSelectors</code> request, but not both. If you apply <code>EventSelectors</code> to a trail, any existing <code>AdvancedEventSelectors</code> are overwritten.",
			"routing": {
				"send": {
					"property": "EventSelectors",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Event Selectors"
					]
				}
			}
		},
		{
			"displayName": "Advanced Event Selectors",
			"name": "AdvancedEventSelectors",
			"type": "json",
			"default": "[\n  {\n    \"FieldSelectors\": {}\n  }\n]",
			"description": " Specifies the settings for advanced event selectors. You can add advanced event selectors, and conditions for your advanced event selectors, up to a maximum of 500 values for all conditions and selectors on a trail. You can use either <code>AdvancedEventSelectors</code> or <code>EventSelectors</code>, but not both. If you apply <code>AdvancedEventSelectors</code> to a trail, any existing <code>EventSelectors</code> are overwritten. For more information about advanced event selectors, see <a href=\"https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-data-events-with-cloudtrail.html\">Logging data events for trails</a> in the <i>CloudTrail User Guide</i>. ",
			"routing": {
				"send": {
					"property": "AdvancedEventSelectors",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Event Selectors"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Event Selectors"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.PutInsightSelectors",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Insight Selectors"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.PutInsightSelectors",
			"type": "options",
			"options": [
				{
					"name": "Com Amazonaws Cloudtrail v20131101 Cloud Trail 20131101 Put Insight Selectors",
					"value": "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.PutInsightSelectors"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Insight Selectors"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Trail Name",
			"name": "TrailName",
			"type": "string",
			"default": "",
			"description": "The name of the CloudTrail trail for which you want to change or add Insights selectors.",
			"routing": {
				"send": {
					"property": "TrailName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Insight Selectors"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Insight Selectors",
			"name": "InsightSelectors",
			"type": "json",
			"default": "[\n  {}\n]",
			"description": "A JSON string that contains the insight types you want to log on a trail. <code>ApiCallRateInsight</code> and <code>ApiErrorRateInsight</code> are valid insight types.",
			"routing": {
				"send": {
					"property": "InsightSelectors",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Insight Selectors"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Insight Selectors"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.PutResourcePolicy",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Resource Policy"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.PutResourcePolicy",
			"type": "options",
			"options": [
				{
					"name": "Com Amazonaws Cloudtrail v20131101 Cloud Trail 20131101 Put Resource Policy",
					"value": "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.PutResourcePolicy"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Resource Policy"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Resource Arn",
			"name": "ResourceArn",
			"type": "string",
			"default": "",
			"description": " The Amazon Resource Name (ARN) of the CloudTrail channel attached to the resource-based policy. The following is the format of a resource ARN: <code>arn:aws:cloudtrail:us-east-2:123456789012:channel/MyChannel</code>. ",
			"routing": {
				"send": {
					"property": "ResourceArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Resource Policy"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Resource Policy",
			"name": "ResourcePolicy",
			"type": "string",
			"default": "",
			"description": "<p> A JSON-formatted string for an Amazon Web Services resource-based policy. </p> <p>The following are requirements for the resource policy:</p> <ul> <li> <p> Contains only one action: cloudtrail-data:PutAuditEvents </p> </li> <li> <p> Contains at least one statement. The policy can have a maximum of 20 statements. </p> </li> <li> <p> Each statement contains at least one principal. A statement can have a maximum of 50 principals. </p> </li> </ul>",
			"routing": {
				"send": {
					"property": "ResourcePolicy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Resource Policy"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Put Resource Policy"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.RegisterOrganizationDelegatedAdmin",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Register Organization Delegated Admin"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.RegisterOrganizationDelegatedAdmin",
			"type": "options",
			"options": [
				{
					"name": "Com Amazonaws Cloudtrail v20131101 Cloud Trail 20131101 Register Organization Delegated Admin",
					"value": "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.RegisterOrganizationDelegatedAdmin"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Register Organization Delegated Admin"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Member Account ID",
			"name": "MemberAccountId",
			"type": "string",
			"default": "",
			"description": "An organization member account ID that you want to designate as a delegated administrator.",
			"routing": {
				"send": {
					"property": "MemberAccountId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Register Organization Delegated Admin"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Register Organization Delegated Admin"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.RemoveTags",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Remove Tags"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.RemoveTags",
			"type": "options",
			"options": [
				{
					"name": "Com Amazonaws Cloudtrail v20131101 Cloud Trail 20131101 Remove Tags",
					"value": "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.RemoveTags"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Remove Tags"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Resource ID",
			"name": "ResourceId",
			"type": "string",
			"default": "",
			"description": "<p>Specifies the ARN of the trail, event data store, or channel from which tags should be removed.</p> <p> Example trail ARN format: <code>arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail</code> </p> <p>Example event data store ARN format: <code>arn:aws:cloudtrail:us-east-2:12345678910:eventdatastore/EXAMPLE-f852-4e8f-8bd1-bcf6cEXAMPLE</code> </p> <p>Example channel ARN format: <code>arn:aws:cloudtrail:us-east-2:123456789012:channel/01234567890</code> </p>",
			"routing": {
				"send": {
					"property": "ResourceId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Remove Tags"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Tags List",
			"name": "TagsList",
			"type": "json",
			"default": "[\n  {\n    \"Value\": {}\n  }\n]",
			"description": "Specifies a list of tags to be removed.",
			"routing": {
				"send": {
					"property": "TagsList",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Remove Tags"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Remove Tags"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.RestoreEventDataStore",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Restore Event Data Store"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.RestoreEventDataStore",
			"type": "options",
			"options": [
				{
					"name": "Com Amazonaws Cloudtrail v20131101 Cloud Trail 20131101 Restore Event Data Store",
					"value": "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.RestoreEventDataStore"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Restore Event Data Store"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Event Data Store",
			"name": "EventDataStore",
			"type": "string",
			"default": "",
			"description": "The ARN (or the ID suffix of the ARN) of the event data store that you want to restore.",
			"routing": {
				"send": {
					"property": "EventDataStore",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Restore Event Data Store"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Restore Event Data Store"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StartImport",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Import"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StartImport",
			"type": "options",
			"options": [
				{
					"name": "Com Amazonaws Cloudtrail v20131101 Cloud Trail 20131101 Start Import",
					"value": "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StartImport"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Import"
					]
				}
			}
		},
		{
			"displayName": "Destinations",
			"name": "Destinations",
			"type": "json",
			"default": "[\n  null\n]",
			"description": " The ARN of the destination event data store. Use this parameter for a new import. ",
			"routing": {
				"send": {
					"property": "Destinations",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Import"
					]
				}
			}
		},
		{
			"displayName": "Import Source",
			"name": "ImportSource",
			"type": "json",
			"default": "{\n  \"S3\": {\n    \"S3LocationUri\": {},\n    \"S3BucketRegion\": {},\n    \"S3BucketAccessRoleArn\": {}\n  }\n}",
			"description": " The source S3 bucket for the import. Use this parameter for a new import. ",
			"routing": {
				"send": {
					"property": "ImportSource",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Import"
					]
				}
			}
		},
		{
			"displayName": "Start Event Time",
			"name": "StartEventTime",
			"type": "string",
			"default": "",
			"description": " Use with <code>EndEventTime</code> to bound a <code>StartImport</code> request, and limit imported trail events to only those events logged within a specified time period. When you specify a time range, CloudTrail checks the prefix and log file names to verify the names contain a date between the specified <code>StartEventTime</code> and <code>EndEventTime</code> before attempting to import events. ",
			"routing": {
				"send": {
					"property": "StartEventTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Import"
					]
				}
			}
		},
		{
			"displayName": "End Event Time",
			"name": "EndEventTime",
			"type": "string",
			"default": "",
			"description": " Use with <code>StartEventTime</code> to bound a <code>StartImport</code> request, and limit imported trail events to only those events logged within a specified time period. When you specify a time range, CloudTrail checks the prefix and log file names to verify the names contain a date between the specified <code>StartEventTime</code> and <code>EndEventTime</code> before attempting to import events. ",
			"routing": {
				"send": {
					"property": "EndEventTime",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Import"
					]
				}
			}
		},
		{
			"displayName": "Import ID",
			"name": "ImportId",
			"type": "string",
			"default": "",
			"description": " The ID of the import. Use this parameter when you are retrying an import. ",
			"routing": {
				"send": {
					"property": "ImportId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Import"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Import"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StartLogging",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Logging"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StartLogging",
			"type": "options",
			"options": [
				{
					"name": "Com Amazonaws Cloudtrail v20131101 Cloud Trail 20131101 Start Logging",
					"value": "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StartLogging"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Logging"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Name",
			"name": "Name",
			"type": "string",
			"default": "",
			"description": "<p>Specifies the name or the CloudTrail ARN of the trail for which CloudTrail logs Amazon Web Services API calls. The following is the format of a trail ARN.</p> <p> <code>arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail</code> </p>",
			"routing": {
				"send": {
					"property": "Name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Logging"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Logging"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StartQuery",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Query"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StartQuery",
			"type": "options",
			"options": [
				{
					"name": "Com Amazonaws Cloudtrail v20131101 Cloud Trail 20131101 Start Query",
					"value": "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StartQuery"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Query"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Query Statement",
			"name": "QueryStatement",
			"type": "string",
			"default": "",
			"description": "The SQL code of your query.",
			"routing": {
				"send": {
					"property": "QueryStatement",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Query"
					]
				}
			}
		},
		{
			"displayName": "Delivery S 3 Uri",
			"name": "DeliveryS3Uri",
			"type": "string",
			"default": "",
			"description": " The URI for the S3 bucket where CloudTrail delivers the query results. ",
			"routing": {
				"send": {
					"property": "DeliveryS3Uri",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Query"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Query"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StopImport",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Stop Import"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StopImport",
			"type": "options",
			"options": [
				{
					"name": "Com Amazonaws Cloudtrail v20131101 Cloud Trail 20131101 Stop Import",
					"value": "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StopImport"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Stop Import"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Import ID",
			"name": "ImportId",
			"type": "string",
			"default": "",
			"description": " The ID of the import. ",
			"routing": {
				"send": {
					"property": "ImportId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Stop Import"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Stop Import"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StopLogging",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Stop Logging"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StopLogging",
			"type": "options",
			"options": [
				{
					"name": "Com Amazonaws Cloudtrail v20131101 Cloud Trail 20131101 Stop Logging",
					"value": "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StopLogging"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Stop Logging"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Name",
			"name": "Name",
			"type": "string",
			"default": "",
			"description": "<p>Specifies the name or the CloudTrail ARN of the trail for which CloudTrail will stop logging Amazon Web Services API calls. The following is the format of a trail ARN.</p> <p> <code>arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail</code> </p>",
			"routing": {
				"send": {
					"property": "Name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Stop Logging"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Stop Logging"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.UpdateChannel",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Channel"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.UpdateChannel",
			"type": "options",
			"options": [
				{
					"name": "Com Amazonaws Cloudtrail v20131101 Cloud Trail 20131101 Update Channel",
					"value": "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.UpdateChannel"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Channel"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Channel",
			"name": "Channel",
			"type": "string",
			"default": "",
			"description": "The ARN or ID (the ARN suffix) of the channel that you want to update.",
			"routing": {
				"send": {
					"property": "Channel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Channel"
					]
				}
			}
		},
		{
			"displayName": "Destinations",
			"name": "Destinations",
			"type": "json",
			"default": "[\n  {\n    \"Location\": {}\n  }\n]",
			"description": "The ARNs of event data stores that you want to log events arriving through the channel.",
			"routing": {
				"send": {
					"property": "Destinations",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Channel"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "Name",
			"type": "string",
			"default": "",
			"description": " Changes the name of the channel. ",
			"routing": {
				"send": {
					"property": "Name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Channel"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Channel"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.UpdateEventDataStore",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Event Data Store"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.UpdateEventDataStore",
			"type": "options",
			"options": [
				{
					"name": "Com Amazonaws Cloudtrail v20131101 Cloud Trail 20131101 Update Event Data Store",
					"value": "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.UpdateEventDataStore"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Event Data Store"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Event Data Store",
			"name": "EventDataStore",
			"type": "string",
			"default": "",
			"description": "The ARN (or the ID suffix of the ARN) of the event data store that you want to update.",
			"routing": {
				"send": {
					"property": "EventDataStore",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Event Data Store"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "Name",
			"type": "string",
			"default": "",
			"description": "The event data store name.",
			"routing": {
				"send": {
					"property": "Name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Event Data Store"
					]
				}
			}
		},
		{
			"displayName": "Advanced Event Selectors",
			"name": "AdvancedEventSelectors",
			"type": "json",
			"default": "[\n  {\n    \"FieldSelectors\": {}\n  }\n]",
			"description": "The advanced event selectors used to select events for the event data store. You can configure up to five advanced event selectors for each event data store.",
			"routing": {
				"send": {
					"property": "AdvancedEventSelectors",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Event Data Store"
					]
				}
			}
		},
		{
			"displayName": "Multi Region Enabled",
			"name": "MultiRegionEnabled",
			"type": "boolean",
			"default": true,
			"description": "Specifies whether an event data store collects events from all regions, or only from the region in which it was created.",
			"routing": {
				"send": {
					"property": "MultiRegionEnabled",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Event Data Store"
					]
				}
			}
		},
		{
			"displayName": "Organization Enabled",
			"name": "OrganizationEnabled",
			"type": "boolean",
			"default": true,
			"description": "Specifies whether an event data store collects events logged for an organization in Organizations.",
			"routing": {
				"send": {
					"property": "OrganizationEnabled",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Event Data Store"
					]
				}
			}
		},
		{
			"displayName": "Retention Period",
			"name": "RetentionPeriod",
			"type": "number",
			"default": 0,
			"description": "The retention period, in days.",
			"routing": {
				"send": {
					"property": "RetentionPeriod",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Event Data Store"
					]
				}
			}
		},
		{
			"displayName": "Termination Protection Enabled",
			"name": "TerminationProtectionEnabled",
			"type": "boolean",
			"default": true,
			"description": "Indicates that termination protection is enabled and the event data store cannot be automatically deleted.",
			"routing": {
				"send": {
					"property": "TerminationProtectionEnabled",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Event Data Store"
					]
				}
			}
		},
		{
			"displayName": "Kms Key ID",
			"name": "KmsKeyId",
			"type": "string",
			"default": "",
			"description": "<p>Specifies the KMS key ID to use to encrypt the events delivered by CloudTrail. The value can be an alias name prefixed by <code>alias/</code>, a fully specified ARN to an alias, a fully specified ARN to a key, or a globally unique identifier.</p> <important> <p>Disabling or deleting the KMS key, or removing CloudTrail permissions on the key, prevents CloudTrail from logging events to the event data store, and prevents users from querying the data in the event data store that was encrypted with the key. After you associate an event data store with a KMS key, the KMS key cannot be removed or changed. Before you disable or delete a KMS key that you are using with an event data store, delete or back up your event data store.</p> </important> <p>CloudTrail also supports KMS multi-Region keys. For more information about multi-Region keys, see <a href=\"https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html\">Using multi-Region keys</a> in the <i>Key Management Service Developer Guide</i>.</p> <p>Examples:</p> <ul> <li> <p> <code>alias/MyAliasName</code> </p> </li> <li> <p> <code>arn:aws:kms:us-east-2:123456789012:alias/MyAliasName</code> </p> </li> <li> <p> <code>arn:aws:kms:us-east-2:123456789012:key/12345678-1234-1234-1234-123456789012</code> </p> </li> <li> <p> <code>12345678-1234-1234-1234-123456789012</code> </p> </li> </ul>",
			"routing": {
				"send": {
					"property": "KmsKeyId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Event Data Store"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Event Data Store"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.UpdateTrail",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Trail"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.UpdateTrail",
			"type": "options",
			"options": [
				{
					"name": "Com Amazonaws Cloudtrail v20131101 Cloud Trail 20131101 Update Trail",
					"value": "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.UpdateTrail"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Trail"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Name",
			"name": "Name",
			"type": "string",
			"default": "",
			"description": "<p>Specifies the name of the trail or trail ARN. If <code>Name</code> is a trail name, the string must meet the following requirements:</p> <ul> <li> <p>Contain only ASCII letters (a-z, A-Z), numbers (0-9), periods (.), underscores (_), or dashes (-)</p> </li> <li> <p>Start with a letter or number, and end with a letter or number</p> </li> <li> <p>Be between 3 and 128 characters</p> </li> <li> <p>Have no adjacent periods, underscores or dashes. Names like <code>my-_namespace</code> and <code>my--namespace</code> are not valid.</p> </li> <li> <p>Not be in IP address format (for example, 192.168.5.4)</p> </li> </ul> <p>If <code>Name</code> is a trail ARN, it must be in the following format.</p> <p> <code>arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail</code> </p>",
			"routing": {
				"send": {
					"property": "Name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Trail"
					]
				}
			}
		},
		{
			"displayName": "S 3 Bucket Name",
			"name": "S3BucketName",
			"type": "string",
			"default": "",
			"description": "Specifies the name of the Amazon S3 bucket designated for publishing log files. See <a href=\"https://docs.aws.amazon.com/awscloudtrail/latest/userguide/create_trail_naming_policy.html\">Amazon S3 Bucket Naming Requirements</a>.",
			"routing": {
				"send": {
					"property": "S3BucketName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Trail"
					]
				}
			}
		},
		{
			"displayName": "S 3 Key Prefix",
			"name": "S3KeyPrefix",
			"type": "string",
			"default": "",
			"description": "Specifies the Amazon S3 key prefix that comes after the name of the bucket you have designated for log file delivery. For more information, see <a href=\"https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-find-log-files.html\">Finding Your CloudTrail Log Files</a>. The maximum length is 200 characters.",
			"routing": {
				"send": {
					"property": "S3KeyPrefix",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Trail"
					]
				}
			}
		},
		{
			"displayName": "Sns Topic Name",
			"name": "SnsTopicName",
			"type": "string",
			"default": "",
			"description": "Specifies the name of the Amazon SNS topic defined for notification of log file delivery. The maximum length is 256 characters.",
			"routing": {
				"send": {
					"property": "SnsTopicName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Trail"
					]
				}
			}
		},
		{
			"displayName": "Include Global Service Events",
			"name": "IncludeGlobalServiceEvents",
			"type": "boolean",
			"default": true,
			"description": "Specifies whether the trail is publishing events from global services such as IAM to the log files.",
			"routing": {
				"send": {
					"property": "IncludeGlobalServiceEvents",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Trail"
					]
				}
			}
		},
		{
			"displayName": "Is Multi Region Trail",
			"name": "IsMultiRegionTrail",
			"type": "boolean",
			"default": true,
			"description": "Specifies whether the trail applies only to the current region or to all regions. The default is false. If the trail exists only in the current region and this value is set to true, shadow trails (replications of the trail) will be created in the other regions. If the trail exists in all regions and this value is set to false, the trail will remain in the region where it was created, and its shadow trails in other regions will be deleted. As a best practice, consider using trails that log events in all regions.",
			"routing": {
				"send": {
					"property": "IsMultiRegionTrail",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Trail"
					]
				}
			}
		},
		{
			"displayName": "Enable Log File Validation",
			"name": "EnableLogFileValidation",
			"type": "boolean",
			"default": true,
			"description": "<p>Specifies whether log file validation is enabled. The default is false.</p> <note> <p>When you disable log file integrity validation, the chain of digest files is broken after one hour. CloudTrail does not create digest files for log files that were delivered during a period in which log file integrity validation was disabled. For example, if you enable log file integrity validation at noon on January 1, disable it at noon on January 2, and re-enable it at noon on January 10, digest files will not be created for the log files delivered from noon on January 2 to noon on January 10. The same applies whenever you stop CloudTrail logging or delete a trail.</p> </note>",
			"routing": {
				"send": {
					"property": "EnableLogFileValidation",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Trail"
					]
				}
			}
		},
		{
			"displayName": "Cloud Watch Logs Log Group Arn",
			"name": "CloudWatchLogsLogGroupArn",
			"type": "string",
			"default": "",
			"description": "<p>Specifies a log group name using an Amazon Resource Name (ARN), a unique identifier that represents the log group to which CloudTrail logs are delivered. You must use a log group that exists in your account.</p> <p>Not required unless you specify <code>CloudWatchLogsRoleArn</code>.</p>",
			"routing": {
				"send": {
					"property": "CloudWatchLogsLogGroupArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Trail"
					]
				}
			}
		},
		{
			"displayName": "Cloud Watch Logs Role Arn",
			"name": "CloudWatchLogsRoleArn",
			"type": "string",
			"default": "",
			"description": "Specifies the role for the CloudWatch Logs endpoint to assume to write to a user's log group. You must use a role that exists in your account.",
			"routing": {
				"send": {
					"property": "CloudWatchLogsRoleArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Trail"
					]
				}
			}
		},
		{
			"displayName": "Kms Key ID",
			"name": "KmsKeyId",
			"type": "string",
			"default": "",
			"description": "<p>Specifies the KMS key ID to use to encrypt the logs delivered by CloudTrail. The value can be an alias name prefixed by \"alias/\", a fully specified ARN to an alias, a fully specified ARN to a key, or a globally unique identifier.</p> <p>CloudTrail also supports KMS multi-Region keys. For more information about multi-Region keys, see <a href=\"https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html\">Using multi-Region keys</a> in the <i>Key Management Service Developer Guide</i>.</p> <p>Examples:</p> <ul> <li> <p>alias/MyAliasName</p> </li> <li> <p>arn:aws:kms:us-east-2:123456789012:alias/MyAliasName</p> </li> <li> <p>arn:aws:kms:us-east-2:123456789012:key/12345678-1234-1234-1234-123456789012</p> </li> <li> <p>12345678-1234-1234-1234-123456789012</p> </li> </ul>",
			"routing": {
				"send": {
					"property": "KmsKeyId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Trail"
					]
				}
			}
		},
		{
			"displayName": "Is Organization Trail",
			"name": "IsOrganizationTrail",
			"type": "boolean",
			"default": true,
			"description": "Specifies whether the trail is applied to all accounts in an organization in Organizations, or only for the current Amazon Web Services account. The default is false, and cannot be true unless the call is made on behalf of an Amazon Web Services account that is the management account or delegated administrator account for an organization in Organizations. If the trail is not an organization trail and this is set to <code>true</code>, the trail will be created in all Amazon Web Services accounts that belong to the organization. If the trail is an organization trail and this is set to <code>false</code>, the trail will remain in the current Amazon Web Services account but be deleted from all member accounts in the organization.",
			"routing": {
				"send": {
					"property": "IsOrganizationTrail",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Trail"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Trail"
					]
				}
			}
		},
];
