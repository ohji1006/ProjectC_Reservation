package kr.or.connect.reservation.dao;

public class PromotionSql {
	public final static String SELECT_ALL = "select pm.id, pd.id as product_id, fi.save_file_name as product_image_url from promotion as pm " + 
			"join product as pd on pm.product_id = pd.id " + 
			"join product_image as pi on pd.id = pi.product_id " + 
			"join file_info as fi on pi.file_id = fi.id " + 
			"where pi.type = 'th' ";
}
