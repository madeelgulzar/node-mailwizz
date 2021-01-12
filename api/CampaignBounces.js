const Request = require('./Request');

const path = '/campaigns/';

class CampaignBounces extends Request {
    constructor(config) {
        super(config);
    }

    getLists(campaignUid, page, perPage) {
        this.method = Request.Type.GET;
        this.url = path + campaignUid + '/bounces';
        this.data = {
            page: page,
            per_page: perPage
        };

        return this.send();
    }
}

module.exports = CampaignBounces;
