import View from '../models/View';

class ViewService {
  async getRoleViews(role: string) {
    const view: any = await View.findOne({ role });

    return view;
  }

}

export default new ViewService();
