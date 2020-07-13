package kr.or.connect.reservation.sql;

public class ProductSql {
	public static final String SELECT_COUNT = 
			"select count(*) from product as pr join display_info as di on pr.id = di.product_id";
	public static final String SELECT_COUNT_SPECIFIC_CATEGORY_PRODUCT = 
			"select count(*) from product as pr join display_info as di on pr.id = di.product_id where pr.category_id = :categoryId";
	public static final String SELECT_ALL_PRODUCT = "select di.id as display_info_id, pr.id as product_id, pr.description as product_description, di.place_name as place_name, pr.content as product_content, fi.save_file_name as product_image_url " +
	        "from category as ca " + 
			"join product as pr on ca.id = pr.category_id " + 
			"join display_info as di on pr.id = di.product_id " + 
			"join product_image as pi on pr.id = pi.product_id " + 
			"join file_info as fi on pi.file_id = fi.id " + 
			"where pi.type = 'th' " +
			"LIMIT :start, :end";
	public static final String SELECT_SPECIFIC_CATEGORY_PRODUCT = 
			"select di.id as display_info_id, pr.id as product_id, pr.description as product_description, di.place_name as place_name, pr.content as product_content, fi.save_file_name as product_image_url " +
			"from product as pr " + 
			"join display_info as di on pr.id = di.product_id " + 
			"join product_image as pi on pr.id = pi.product_id " + 
			"join file_info as fi on pi.file_id = fi.id " + 
			"where pr.category_id = :categoryId and pi.type = 'th' " + 
			"LIMIT :start, :end";
}
